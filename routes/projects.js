const express = require('express');
const router = express.Router();

const projects = require('../data.json');

router.get('/:id', (req, res, next) => {  
    const {id} = req.params;
    const {
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        image_urls
    
    } = projects[id];
    const info = {
        id,
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        image_urls
    };


    res.render('project', info);
});

module.exports = router;