var User = require('./models/user');

var chris = new User({
    name: 'Chris',
    username: 'chris',
    password: 'pass'
});

chris.dudify(function(err, name){
    if(err)
        throw err;
    console.log('Your new name is ' + name);
});

chris.save(function(err){
    if(err)
        throw err;
    console.log('User ' + this.name + ' saved successfully!');
});