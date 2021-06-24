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
// might need more here with booleans - research and come back to
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", { 
    // to handle deprecation warnings
    // because of the deprecation warning with the tool MongoDB Node.js uses to parse MongoDB Connection Strings
    useNewUrlParser: true,
    // if using findOneAndUpdate() or findOneAndDelete in api routes - need to use useFindAndModify: false - because of deprecation warnings
    useFindAndModify: false,
    // configure to use createIndex instead of ensureIndex (a default of Mongoose 5.x)
    useCreateIndex: true,
    // to opt in on using the new topology engine from MongoDB driver 3.3x (which is used in Mongoose 5.7)
    useUnifiedTopology: true
});

// Routes
require('./routes/api-routes');
require('./routes/html-routes');

// Pick which way - depends on what I want in routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


// Calling server to listen
app.listen(3002, () => {
    console.log("App running on port 3002!");
});
