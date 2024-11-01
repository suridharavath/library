const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" folder

// Route to serve the registration form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission
app.post('/register', (req, res) => {
    const studentData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        course: req.body.course,
        address: req.body.address,
    };

    console.log('Student Registration Data:', studentData);
    // Here, you can save the data to a database if needed.

    res.send('Registration successful! Thank you for registering.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
