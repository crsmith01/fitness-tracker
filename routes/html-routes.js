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

// should be ../, right = means the parent of the current directory.
// have tried:
// html = the html file in the same folder a the current page = not true
// public/... = the html file is located in the public folder at the root of the current foler = not true
// /public/.... = the html file is located in the public folder at the root of the current web
// ./public/...= the html is in the public folder,which is in the current folder?
// ../public/... = the html file is located in the folder one level up from the current folder


module.exports = router;