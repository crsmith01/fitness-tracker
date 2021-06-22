// Dependencies

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
// day and array of exercises - name, type, duration, weight, sets, reps, distances (as seen in seed.js file)
// only type, name, and duration are required (only ones that appear in every entry in seed.js)
    day: {
        type: Date,
        default: ()=> new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Enter the type of exercise (i.e. resistance, cardio, etc.).'
        },
        name: {
            type: String,
            required: 'Enter the name of the exercise (i.e. bicep curl, push press, bench press, etc.)'
        },
        // what exactly does it mean - minutes?
        duration: {
            type: Number,
            required: 'Enter a number.'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distances: {
            type: Number
        }
    }]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;