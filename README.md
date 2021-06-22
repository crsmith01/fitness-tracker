# Fitness Tracker
Application to allow users to view, create, and track daily workouts


## My Task

My task this week is to create a workout tracker application. I was provided with the front end code in the and had to create a Mongo database with a Mongoose schema and handle routes with Express.

## Table of Contents

1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Business Context](#Business-Context)
4. [Acceptance Criteria](#Acceptance-Criteria)
5. [Mock Up](#Mock-Up)
6. [Usage](#Usage)
7. [Contact](#Contact)
8. [License](#License)

## Technologies Used
```
1. JavaScript
2. Express.js
3. Node.js
4. MongoDB
5. Robo3T
```

## User Story
```
As a user, I want to be able to view, create, and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria
```
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.
```

## Mock-Up
##### UPDATE UPDATE UPDATE
The following link leads to the GitHub repository for this app:
![GitHub Link](https://github.com/crsmith01/fitness-tracker)

The following link leads to the deployed application on Heroku:
![Heroku Link](_____________)

## Usage
To run the app locally, follow these steps:
1. Install the necessary dependencies. Navigate to the repository's root directory and run the following: 
```
npm install
```
2. Create a .env file in the root directory. It should contain the following information:
```
DB_NAME=your database name
DB_USER=your username (often 'root')
DB_PASSWORD=your password
```
3. Create your own database by running the following query in MySQL Workbench:
```
DROP DATABASE IF EXISTS techBlog_db;
CREATE DATABASE techBlog_db;
```
4. To seed the database, enter the following:
```
node seeds/node
```
5. To start the server, enter the following:
```
npm start
```

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
