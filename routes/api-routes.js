// Dependencies
const express = require('express');
const db = require('../models');


// use aggregate function to dynamically add up and return the total duration for each workout
// endpoints defined in api.js file in public folder

// Get (read) workouts
app.get('/api/workouts', (req, res) => {
    db.Workout.
});

'api/workouts/range'

// Post (create/insert) workouts
app.post('/api/workouts', (req, res) => {
    db.Workout.create({})
        .then((fitnessDB) => {
            res.json(fitnessDB);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Put (update) workouts
'api/workouts/:id'


// Delete (remove) workout