// Dependencies
const router = require('express').Router();
const path = require('path');


// 3 get routes - exercise.html, index.html, and stat.html in public folder 
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', async (req, res) => {
    // Here, exercise.html is rendered
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', async (req, res) => {
    // Here, stats.html is rendered
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;