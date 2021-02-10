const express = require('express');
const passport = require('passport');
const router = express.Router();

// --- Setting up Routes for the Express Web Application
router.get('/',(request, response) => {
    response.send('Hello, welcome to this Web Application');
});

// This get request returns a response to allow devs know the API is working
router.get('/status',(request, response) => {
    response.status(200).json({
        message: 'Working',
        status: '200'
    });
});

// Signup request 
router.post('/signup',passport.authenticate('signup', { session: false }), (request, response, next) => {
    response.status(200).json({
        message: 'Signup successful',
        status: 200});
});

// Login request 
router.post('/login',(request, response) => {
    if (!request.body) {
        response.status(400).json({
            message: 'Invalid body', 
            status: 400});
    } else {
        response.status(200).json({
            message: 'Login post request working',
            status: 200});
    }
});

// Logout request 
router.post('/logout',(request, response) => {
    if (!request.body) {
        response.status(400).json({
            message: 'Invalid body', 
            status: 400});
    } else {
        response.status(200).json({
            message: 'Logout post request working',
            status: 200});
    }
});

// Token request 
router.post('/token',(request, response) => {
    if (!request.body || !request.body.refreshToken) {
        response.status(400).json({
            message: 'Invalid body', 
            status: 400});
    } else {
        const {refreshToken} = request.body;
        response.status(200).json({
            message: `Refresh token requested for token: ${refreshToken}`,
            status: 200});
    }
});

// Exports variables created in this file and
// allows them to be required within other files.
module.exports = router;