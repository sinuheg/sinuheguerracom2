const express = require('express');
const router = express.Router();

var Post = require('../models/post');
var Profile = require('../models/profile');
var Comment = require('../models/comment');
var Candidate = require('../models/candidate');




// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  /*axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });*/

    Post.find({},function(err, posts){
      if(err) 
        res.status(500).send(err);
      console.log('posts sent: ' +posts.length);
      res.status(200).json(posts);
    });
});

router.get('/profile', (req, res) => {

    Profile.find({ProfileId:2},function(err, data){
      if(err) 
        res.status(500).send(err);
      console.log('profile sent: ' +data.length);

      var profile = data[0].toJSON();
      profile.Photo = 'data:image/png;base64,' + new Buffer(profile.Photo.data,'binary').toString('base64');

      Candidate.find({CandidateId:profile.CandidateId},function(err, candidatemodel){
        if(err) 
          res.status(500).send(err)
          var candidate = candidatemodel[0].toJSON();
          if (candidate.Photo) {
            candidate.Photo = 'data:image/png;base64,' + new Buffer(candidate.Photo.data, 'binary').toString('base64');
          }
          profile.candidate = candidate;
          console.log('candidate sent: ' +candidatemodel.length);
          Comment.find({ProfileId:2},function(err, datacomment){
            if(err) 
              res.status(500).send(err);
            var comments = [];
            datacomment.forEach(comment => {
              var newcom = comment.toJSON();
              //console.log('profile: ' + JSON.stringify(comment.CommentPhoto));
              if(comment.CommentPhoto){
                newcom.CommentPhoto = 'data:image/png;base64,' + new Buffer(newcom.CommentPhoto.data,'binary').toString('base64');
              }
              comments.push(newcom);
            });

            comments.sort((com1,com2) => com1.CommentId - com2.CommentId);

            profile.comments = comments;

            res.status(200).json(profile);
            console.log('comments sent: ' +datacomment.length);
            //console.log('profile: ' + JSON.stringify(profile));
          });
        
      });

      

      //res.status(200).json(data);
    });
});

router.get('/save_posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      
      for (var i = 0; i < posts.data.length; i++) {
        var post = new Post({
          id: posts.data[i].id,
          title: posts.data[i].title,
          userId: posts.data[i].userId,
          body: posts.data[i].body
        });

        post.save(function (err) {
          if (err) throw err;
          console.log('post '+ post.id +' saved successfully!');
        });
      }
      

      res.status(200).send('all posts saved');
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;