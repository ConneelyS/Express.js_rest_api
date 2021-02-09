// Importing npm packages
const express = require('express');
const app = express();
const port = 3000;

// --- Setting up Routes for the Express Web Application
app.get('/',(request, response) => {
    // console.log(request);
    response.send('Hello, welcome to this Web Application');
});

// This get request returns a response to allow devs know the API is working
app.get('/status',(request, response) => {
    response.status(200).json({
        message: 'Working',
        status: '200'
    });
});

// Signup request 
app.post('/signup',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// Login request 
app.post('/login',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// Logout request 
app.post('/logout',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// Token request 
app.post('/token',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// Forgot Password request 
app.post('/forgot-password',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// Reset Password request
app.post('/reset-password',(request, response) => {
    response.status(200).json({message: 'Signup post request working'})
});

// 404 Not Found - Shown in no request can be found at certain endpoint
app.use((request, response) => {
    response.status(404).json({
        message: '404 - Not Found',
        status: 404
    });
});

// 500 Error - Handles any errors that might appear
app.use((error, request, response) => {
    response.status(error.status || 500).json({
        error: error.message,
        status: 500
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});






//  --- Learning Notes ---

// String interpolation in Javascript only works with backticks ``
// and not regular comas (one or two) '' or ""

// console.log(`This is logging the test variable ${test}`);