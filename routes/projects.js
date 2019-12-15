const express = require('express');
const router = express.Router();

const {projects} = require('../data.json');  // grabs data.projects

router.get('/:id', (req, res) => {  
    const {id} = req.params;
    const {
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        images_url
    } = projects[id];
    const info = {
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        images_url
    };

// send info to project template
    res.render('project', info);
});

module.exports = router;