const express = require('express');
const router = express.Router();

// Render about template
router.get('/about', (req, res) => {                        
    res.render('about')
});

module.exports = router;