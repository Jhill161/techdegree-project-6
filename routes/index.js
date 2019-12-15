const express = require('express');
const router = express.Router();

// declare data.projects
const {projects} = require('../data.json');


// render index with {projects}
router.get('/', (req, res) => {                       
    res.render('index', {projects})
});

module.exports = router;