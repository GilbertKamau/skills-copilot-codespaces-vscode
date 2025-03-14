// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use the comments.js file
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Add a comment
app.post('/comments', (req, res) => {
    comments.addComment(req.body);
    res.status(201).send('Comment added');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});