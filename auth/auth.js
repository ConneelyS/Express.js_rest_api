const passport = require('passport');
const localStrategy = require('passport-local');

// Handles user registration
passport.use('signup', new localStrategy.Strategy({
    userNameField: "email",
    passwordField: "password",
    passReqToCallback: true,
}, (request, email, password, done) => {
    console.log(email, password);
    console.log(request.body);

    const { username } = request.body;
    if (username && username !== 'error') {
        return done(null, { name: 'Sam'});
    } else {
        return done(new Error('Invalid username'));
    }
}));

// Handles user login
passport.use('login', new localStrategy.Strategy({
    userNameField: "email",
    passwordField: "password",
}, (email, password, done) => {

    if (email !== 'sam@test.com') {
        return done(new Error('User not found'), false);
    }

    if (password !== 'test') {
        return done(new Error('Invalid password'), false);
    }

    return done(null, { name: 'Sam'});
}));