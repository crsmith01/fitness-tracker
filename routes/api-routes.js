// Dependencies
const express = require('express');
const db = require('../models');


// use aggregate function to dynamically add up and return the total duration for each workout
// endpoints defined in api.js file in public folder

// Get (read) workouts
app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(fitnessDB => {
            res.json(fitnessDB)
        })
});

// Get - total duration of a workout (summation of duration of exercises in a workout)
app.get('api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: `$exercises.duration`
                }
            }
        }
    ])
        .then((fitnessDB) => {
            res.json(fitnessDB);
        })
        .catch((err) => {
            res.json(err);
        });
});

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
// findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).
app.put('api/workouts/:id', ({ body, params }, res => {
    db.Workout.findByIdAndUpdate(
        params.id, {
        $push: {
            exercises: body
        }
    },
        {
            new: true, runValidators: true
        }
    )
        .then((fitnessDB) => {
            res.json(fitnessDB);
        })
        .catch((err) => {
            res.json(err);
        });
}));


// Delete (remove) workout
// findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).
app.delete('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndDelete(body.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err);
        });
});