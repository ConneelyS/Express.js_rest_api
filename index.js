// Importing npm packages
const express = require('express');
const app = express();
const port = 3000;
var test = 100;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});






//  --- Learning Notes ---

// String interpolation in Javascript only works with backticks ``
// and not regular comas (one or two) '' or ""

// console.log(`This is logging the test variable ${test}`);