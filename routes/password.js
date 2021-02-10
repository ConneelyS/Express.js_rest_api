const express = require('express');
const router = express.Router();

// Forgot Password request 
router.post('/forgot-password',(request, response) => {
    if (!request.body || !request.body.email) {
        response.status(400).json({
            message: 'Invalid body', 
            status: 400});
    } else {
        const {email} = request.body;
        response.status(200).json({
            message: `Password forgotten for requested email: ${email}`,
            status: 200});
    }
});

// Reset Password request
router.post('/reset-password',(request, response) => {
    if (!request.body || !request.body.email) {
        response.status(400).json({
            message: 'Invalid body', 
            status: 400});
    } else {
        const {email} = request.body;
        response.status(200).json({
            message: `Password reset for requested email: ${email}`,
            status: 200});
    }
});

// Exports variables created in this file and
// allows them to be required within other files.
module.exports = router;