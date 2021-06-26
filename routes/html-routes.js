// Dependencies
const router = require('express').Router();
const path = require('path');


// 3 get routes - exercise.html, index.html, and stat.html in public folder 
router.get('/', async (req, res) => {
    // Index.html is rendered at endpoint /
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', async (req, res) => {
    // Exercise.html is rendered at endpoint /exercise
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', async (req, res) => {
    // Stats.html is rendered at endpoint/stats
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;