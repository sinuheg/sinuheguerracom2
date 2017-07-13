var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-203-188-157.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;


var CandidateSch = new Schema({
    CandidateId: Number,
    Name: String,
    Age: Number,
    DateOfBirth: Date,
    UserName: String,
    Password: String,
    Photo: Buffer,
    MaritalStatus: String,
    Gender: Number
});


var Candidate = mongoose.model('Candidate', CandidateSch);

module.exports = Candidate;