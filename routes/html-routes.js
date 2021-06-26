// Dependencies
const router = require('express').Router();
const path = require('path');
console.log('routes running');

// 3 get routes - exercise.html, index.html, and stats.html in public folder 
router.get('/', (req, res) => {
    // Index.html is rendered at endpoint /
    res.sendFile(path.join(__dirname, '../public/homepage.html'));
});

router.get('/exercise', (req, res) => {
    // Exercise.html is rendered at endpoint /exercise
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    // Stats.html is rendered at endpoint /stats
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


module.exports = router;