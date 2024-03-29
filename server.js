// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression');

// Port
const PORT = process.env.PORT || 80;

// Require the models folder for the database
const db = require("./models");

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());

// Connect to Mongoose database and logging port
// process.env.MONGODB_URI is used for Heroku deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
//  Handle deprecation warnings:
    // because of the deprecation warning with the tool MongoDB Node.js uses to parse MongoDB Connection Strings
    useNewUrlParser: true,
    // configure to use createIndex instead of ensureIndex (a default of Mongoose 5.x)
    useCreateIndex: true,
    // to opt in on using the new topology engine from MongoDB driver 3.3x (which is used in Mongoose 5.7)
    useUnifiedTopology: true,
    // if using findOneAndUpdate() or findOneAndDelete in api routes - need to use useFindAndModify: false - because of deprecation warnings
    useFindAndModify: false
});

// Routes
app.use(require('./routes'));

// Calling server to listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});