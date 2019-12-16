// Static node.js and express Portfolio Site

// Require constants
const express = require('express');                     
const data = require('./data.json').projects;
const app = express();

// Set and use Routes
const index = require('./routes/index');
const about = require('./routes/about');
const projects = require('./routes/projects')

app.use(index);
app.use(about);
app.use(projects);

// Set view engine
app.set('view engine', 'pug');

// Route for static files
app.use('/static', express.static('public'));


// Server
app.listen(process.env.PORT || 3000, () => {
    console.log('The application is running on localhost:3000!');
});

// Error Handler
app.use((req, res, next) => {
    const err = new Error('Sorry, page not found!');
    err.status = 404;
    //pass error to the next matching route.
    next(err);
});


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err)
    res.render('error', {
        message: err.message,
        error: err
    });
});
