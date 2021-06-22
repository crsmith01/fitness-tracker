// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3002;

// Require the models folder for the database
const db = require("./models");

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to Mongoose database and logging port
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", { useNewUrlParser: true });

// Routes


// Calling server to listen
app.listen(3002, () => {
    console.log("App running on port 3002!");
});
