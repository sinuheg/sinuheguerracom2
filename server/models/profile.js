var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-227-26-38.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;


var ProfileSch = new Schema({
    ProfileId: Number,
    Title: String,
    Description: String,
    Major: String,
    Photo: Buffer,
    FacebookUrl: String,
    TwitterUrl: String,
    GooglePlusUrl: String,
    GitHubUrl: String,
    LinkedInUrl: String,
    Visits: Number,
    Likes: Number,
    LastUpdate: Date,
    CandidateId: Number
});


var Profile = mongoose.model('Profile', ProfileSch);

module.exports = Profile;