var mongoose = require('mongoose');
mongoose.connect('mongodb://sinuhe:sinuhe@ec2-34-227-26-38.compute-1.amazonaws.com/sinuheguerracom');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    location: String,
    meta:{
        age: Number,
        website: String,
    },
    created_at: Date,
    updated_at: Date

});

userSchema.methods.dudify = function(){
    this.name = this.name + '-dude';

    return this.name;
};


//create model of userSchema
var User = mongoose.model('User', userSchema);

module.exports = User;