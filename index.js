require('dotenv').config();

// Importing npm packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

// Update Express settings
app.use(bodyParser.urlencoded({ extended: false})); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                         // Parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN })); //

// Require passport auth files
require('./auth/auth');

// Setting up Routes
app.use('/', routes);
app.use('/', passwordRoutes);

// 404 Not Found - Shown in no request can be found at certain endpoint
app.use((request, response) => {
    response.status(404).json({
        message: '404 - Not Found',
        status: 404});
});

// 500 Error - Handles any errors that might appear -- Middleware requires the
// "next" parameter in order to be treated as an error handler by Express.
app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({
        error: error.message,
        status: 500});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//  --- Learning Notes ---

// String interpolation in Javascript only works with backticks ``
// and not regular comas (one or two) '' or ""

// console.log(`This is logging the test variable ${test}`);