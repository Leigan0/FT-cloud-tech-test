# FT Cloud Engineer Technical Exercise

[![Build Status](https://travis-ci.org/Leigan0/test.svg?branch=master)](https://travis-ci.org/Leigan0/test)

## What FT are looking for
* Comfortable with code and infrastructure
* How I solve problems
* Code
* Infrastructure design

## Exercise breakdown
* Build a website hosted in the cloud(AWS,Google, Heroku)
* Website asks for and stores a simple rating score for using ft
* Diagram of site architecture show key components

### Optional
* Templated infrastructure as code
* Automated testing
* Origami Components
* The ability to view the ratings / results

### Usage

** Requirements to run **
 - Node
 - NPM

The project requires the use of a database. Prior to running the project you will require a  [mlab](https://mlab.com) account and database. The database connection has been created through environmental variables. To run tests and the app you must first set up a test & development database and run the following commands in the terminal.

For more information about mlab how to set it up for your own projects visit this [tutorial](https://leigan0.gitbooks.io/team-glow/content/Mongo/Mlab-set-up.html) I wrote about it.

```
export MONGOLAB_URI_TEST='your mlab connection details'
export MONGODB_URI='your mlab connection details'
```

* git clone https://github.com/Leigan0/test.git
* cd to directory
* npm install
* npm start
* navigate to http://localhost:3000/

To run tests
- npm test

To check test coverage
- npm run coverage

Or visit on [Heroku](https://ft-tech-test.herokuapp.com/)

### Technologies used

* Express
* Node.Js
* Javascript
* Pug
* Heroku
* Travis
* Mocha
* Chai
* Supertest
* Istanbul

## My approach

After reading the specifications I came up with the following mvp.

#### MVP

* Homepage with form to enter rating
* Data (rating) persisted
* hosted on cloud
* Diagram of infrastructure

My initial plan is to make a simple version of the app to meet the above.

I have decided to follow the Model-View-Controller architectural pattern, which divides
the application into three interconnected parts, separating internal representations
of information from the ways information is presented and accepted from the user.

##### Application Architecture

![alt text](https://i.imgur.com/HRae39I.jpg)

##### Deployment Infrastructure

![alt text](https://i.imgur.com/RoVe3TW.jpg)

#### Technology decisions

I have decided to write this with JavaScript/Node as I have some (limited) experience in this language
and as per the spec this language is commonly used at FT.

I am using Express for my app routing, and Node.js to allow me to use JS in the front and backend.

Supertest: Allows me to test API

Mocha: Test framework that runs in the browser and on Node.js

Chai: Allows should, expect and asserts matchers

Istanbul: Test coverage

I will use Heroku to host the website. I originally intended to use AWS however I have not had time
to fully understand how to deploy to AWS, so I have used Heroku.

I made the decision to use Heroku due to time pressures, and I also want to be able to implement some level of continuous integration and continuous deployment. As I have some experience in Heroku, using this platform will allow me to look into this further.

Given more time I would gain further understanding and deploy to AWS.

#### Testing & Implementation decisions


I have completed unit tests for express routes. I have pulled server.listen out to serverStart
so I do not have to set a port for testing, supertest will deal with this. This also ensures the server is
closed between tests and does not cause server in use errors.

I have added eslint, and configured this to run in a pretest script. This has been automated to a degree
as linter will now run before tests - tests will not run until eslint has no errors.

I have also updated git hooks - pre-commit file to run npm test at each commit.

This runs linting and tests prior to each commit. I have done this to improve code quality and code commits as I cannot commit code with linting errors or failing tests.

To persist data I have decided to use mongoose / mongodb, through Mlab platform. No requirement for relational database, so no
reason to use postgres.


I have attempted to isolate my tests as much as possible.
Test suits uses a test database which is cleared after test suite runs - may need to look at cleaning between each test
when testing GET routes for ratings (if move onto this)


I wanted to have CI build so my first step was to build using travis. I have not used this before for node projects
or projects with mongodb.

Initial attempted failed - could not access mongourl

Solved this by added encrypted version MONGOLAB_URI_TEST env variable to travis.yml

Attempted deploy to Heroku. Set up mlab using this tutorial
https://devcenter.heroku.com/articles/mongolab

Heroku sets env MONGODB_URI - so amended across app.

App deploys to Heroku - https://ft-tech-test.herokuapp.com/
MVP met.

Whilst automated testing, CI and CD were not part of MVP, I had a objective to achieve this.

To improve automation I have added script to travis.yml file to push to Heroku after successful build. App now tested (specs / lint) and deployed on push to git.

Keys in travis.yml are encrypted by travis.

Outstanding required tasks

- Diagram of site architecture

Points to improve

- add feature tests
- improve unit tests / isolation
- optional features
- refactoring?
