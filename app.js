// Static node.js and express Portfolio Site

// Require constants
const express = require('express');                     
const data = require('./data.json');
const app = express();

// Set view engine
app.set('view engine', 'pug');

// Route for static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {                       
    res.render('index', {data: 'projects'})
});

app.get('/about', (req, res) => {                        
    res.render('about')
});

app.get('/projects', (req, res) => {        
    res.render('project', {projects: 1})
});

// Server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});

//Error Handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Sorry, resource not found! Our Bad!');
    next();
});