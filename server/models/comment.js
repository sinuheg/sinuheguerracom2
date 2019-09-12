var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-227-26-38.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;


var CommentSch = new Schema({
    CommentId: Number,
    Name: String,
    CommentText: String,
    CommentPhoto: Buffer,
    PostedOn: Date,
    Likes: Number,
    ProfileId: Number,
    JobExperienceId: Number,
    EducationId: Number
});


var Comment = mongoose.model('Comment', CommentSch);

module.exports = Comment;