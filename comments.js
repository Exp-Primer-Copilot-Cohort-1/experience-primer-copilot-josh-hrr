// Create web server
// 1. Install express
// 2. Import express
// 3. Create express server
// 4. Create routes
// 5. Start server

// Import express
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// Create express server
const app = express();

// Create routes
// GET
// app.get('/', function(req, res) {
//     res.send('Hello from the web server side...');
// });

// app.get('/comments', function(req, res) {
//     res.send('Hello from comments...');
// });

// app.get('/comments/:id', function(req, res) {
//     res.send(`Hello from comments ${req.params.id}...`);
// });

// app.get('/comments/:id/:title', function(req, res) {
//     res.send(`Hello from comments ${req.params.id} ${req.params.title}...`);
// });

// app.get('/comments/:id/:title/:author', function(req, res) {
//     res.send(`Hello from comments ${req.params.id} ${req.params.title} ${req.params.author}...`);
// });

// POST
// app.post('/comments', function(req, res) {
//     res.send('Hello from comments...');
// });

// app.post('/comments/:id', function(req, res) {
//     res.send(`Hello from comments ${req.params.id}...`);
// });

// app.post('/comments/:id/:title', function(req, res) {
//     res.send(`Hello from comments ${req.params.id} ${req.params.title}...`);
// });

// app.post('/comments/:id/:title/:author', function(req, res) {
//     res.send(`Hello from comments ${req.params.id} ${req.params.title} ${req.params.author}...`);
// });

// PUT
// app.put('/comments', function(req, res) {
//     res.send('Hello from comments...');
// });

// app.put('/comments/:id', function(req, res) {
//     res.send(`Hello from comments ${req.params.id}...`);
// });

// app.put('/comments/:id/:title', function(req, res) {
//     res.send(`Hello from comments ${req.params.id} ${req.params.title}...`);
// });

// app.put('/comments/:id/:title/:author', function(req, res)
