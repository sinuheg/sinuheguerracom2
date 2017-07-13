var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-203-188-157.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    id: { type: Number, required: true, unique: true},
    userId: Number,
    body: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;