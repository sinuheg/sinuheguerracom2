var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-227-26-38.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    id: { type: Number, required: true, unique: true},
    userId: Number,
    body: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;