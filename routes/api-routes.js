// Dependencies
const router = require('express').Router();
const db = require('../models');
const path = require('path');


// use aggregate method to dynamically add up and return the total duration for each workout
// endpoints defined in api.js file in public folder

// Get (read) workouts
// WORKS
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(fitnessDB => {
            res.json(fitnessDB)
        })
        .catch((err) => {
            console.log(err);
            res.json(err)
        });
});

// Get - total duration of a workout (summation of duration of exercises in a workout)
// WORKS
router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then(fitnessDB => {
            res.json(fitnessDB);
        })
        .catch(err => {
            res.json(err);
        })
})

// Post (create/insert) workouts
// WORKS
router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
        .then((fitnessDB) => {
            res.json(fitnessDB);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

// Put (update) workouts
// findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).
// WORKS - I think? - Id is just very long with MongoDB so need to c&p
router.put('/api/workouts/:id', ({ body , params }, res) => {
    console.log({ body })
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(fitnessDB => {
            res.json(fitnessDB);
        })
        .catch(err => {
            res.json(err);
        })
});

// Delete (remove) workout
// findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).
// WORKS
// params might not need to be passed in argument ???????
router.delete('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndDelete(body.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

module.exports = router;