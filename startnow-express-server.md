# Express Server

## Introduction

In this project we're going to:
 - Create a new server using the `Express` framework
 - Log all incoming requests with the `morgan` logging library
 - Serve the Top Spots project from the web server
 - Serve the Top Spots data from the web server
 - Update your Top Spots front end with your new back end

We're going to be using the popular `Express` framework to build a simple server similar to the last one. Only instead of responding with "Hello World" we're going to serve an entire directory and some data for our application.

A framework is a full collection of tools and patterns used to simplify development, as compared to a library which is a small set of tools typically used to accomplish a specific task.

The `Express` web framework provides us with a set of tools to make it easier to build web servers.

You'll be using `morgan` to log each request to the console (on the server side).

You will build a web server that will respond to requests for [http://localhost:3000/](http://localhost:3000/) and return our application's resources.

The web server should also respond to GET requests at [http://localhost:3000/data](http://localhost:3000/data) with all the data from `data.json`.


## Setup

1. Open a terminal
2. Open the project folder in VS Code using the following command: `code ~/oca/startnow-express-server`
3. Run: `npm install`.

Now you are ready to begin. The tests will confirm if you have completed the requirements. Type `npm test` and hit enter to run the tests. Then, write your code using the steps below.  When you have written all the code to complete the project (based on the exit criteria) and the tests are passing, submit the assignment.

Review the documentation for [morgan](https://github.com/expressjs/morgan) and [expressjs](https://expressjs.com).

Install the `express` and `morgan` module using npm

All the code you'll need to write to meet the exit criteria should be written in `app.js`

In order to respond to requests with the top spots data, you'll need to import the `data.js` file using `require()`.

## Exit Criteria

* Server should respond to GET requests to `/` route the top spots page

* Server should respond with a status code of 200

* Server should log each request using `morgan`'s dev format

* Server should indicate when it is listening and on which port

* Server should respond to GET requests to `/data` route with the top spots data

* All tests should pass
