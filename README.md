# FT Cloud Engineer Technical Exercise

[![Build Status](https://travis-ci.org/Leigan0/test.svg?branch=master)](https://travis-ci.org/Leigan0/test)

## Exercise breakdown
* Build a website hosted in the cloud(AWS,Google, Heroku)
* Website asks for and stores a simple rating score for using ft
* Diagram of site architecture show key components

### Usage

** Requirements to run **
 - Node
 - NPM

The project requires the use of a database. Prior to running the project you will require a [mlab](https://mlab.com) account and database. The database connection has been created through environmental variables when run locally. To run tests and the app you must first set up a test & development database and run the following commands in the terminal.

For more information about mlab and or for a guide on how to set it up for your own projects visit this [tutorial](https://leigan0.gitbooks.io/team-glow/content/Mongo/Mlab-set-up.html) I wrote about it.

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

## My approach

After reading the specifications I came up with the following mvp.

#### MVP

* Homepage with form to enter rating
* Data (rating) persisted
* hosted on cloud
* Diagram of infrastructure

My initial plan is to make a simple version of the app to meet the above.

I have decided to follow the Model-View-Controller architectural pattern, which divides
the application into three interconnected parts, allowing separation of concerns. This pattern
separates internal representations of information from the way information is presented and accepted
from the user

When building the app, I have also followed the RESTful API design pattern.

To maintain readabilty and extendability I have separated by controller into ratings and index files.

##### Application Architecture

![alt text](https://i.imgur.com/SB6Yutq.jpg)

##### Deployment Infrastructure

![alt text](https://i.imgur.com/ObPLBhR.jpg)

#### Technology decisions

I have decided to write this with JavaScript/Node primarily as this is the the language most commonly used at FT.
I have some (limited) experience in this language and framework from my final project, but I am also keen to gain
more knowledge and understanding of this framework.

I am using Express for my app routing, and Node.js to allow me to use JS in the front and backend.

Supertest: Allows me to test API.

Mocha: Test framework that runs in the browser and on Node.js. I have not used this tech before to test a application I have written, however I think this will be a good learning point.

Chai: Allows should, expect and asserts matchers. Whilst I have not used this tech before, adding expect matchers makes the syntax more readable, so I have chosen to use this also.

Istanbul: I wanted to add a test coverage to allow some measure of my testing. Whilst I know it is not a strong indicator of test quality, it allows some insight, and highlights areas for consideration.

I will use Heroku to host the website. I originally intended to use AWS however I have not had time
to fully understand how to deploy to AWS, so I have used Heroku.

I made the decision to use Heroku due to time pressures, and I also want to be able to implement some level of continuous integration and continuous deployment. As I have some experience in Heroku, using this platform will allow me to look into this further.

Given more time I would gain further understanding and deploy to AWS.

#### Testing & Implementation decisions


I have completed unit tests for express routes. I have pulled server.listen out to serverStart
so I do not have to set a port for testing, supertest will deal with this. This also ensures the server is
closed between tests and does not cause server in use errors.

I have added eslint, and configured this to run in a pretest script. This has been automated to a degree
as linter will now run before tests - tests will not run until eslint has no errors. I have done this to improve my JavaScript code base.

I have also updated git hooks - pre-commit file to run npm test at each commit.

This runs linting and tests prior to each commit. I have done this to improve code quality and code commits as I cannot commit code with linting errors or failing tests.

To persist data I have decided to use mongoose / mongodb, through Mlab platform. No requirement for relational database, so no
reason to use postgres. I have chosen mlab over mongodb locally for ease of use and scalability. Having data saved in cloud rather than local machine is more efficient and maintainable from any resource.

I have attempted to isolate my tests as much as possible.

The test suite uses a test database which is cleared after test suite runs - may need to look at cleaning between each test
when testing GET routes for ratings (if move onto this). I did not implement this straight away as it was not required and did not affect my tests already written.

I wanted to have CI build so my first step was to build using travis. I have not used this before for node projects
or projects with mongodb.

Initial attempted failed - could not access mongourl. I Solved this by adding encrypted version MONGOLAB_URI_TEST env variable to travis.yml. I then attempted deploy to Heroku. Set up mlab using this tutorial https://devcenter.heroku.com/articles/mongolab

Heroku sets env MONGODB_URI - so amended across app. App deploys to Heroku - https://ft-tech-test.herokuapp.com/
MVP met.

Whilst automated testing, CI/CD were not part of MVP, I had a objective to achieve this for my learning.  To improve automation I have added script to travis.yml file to push to Heroku after successful build. App now tested (specs / lint) and deployed on push to git. Keys in travis.yml are encrypted by travis.

As I have met MVP I have chosen to implement some additional features. I also spent some time refactoring my tests to remove repeated code.


### Next steps

If I had more time my next considerations points would be:

- add feature tests, the application is not featured tested - tests which recreated user interaction.
  - I would need to research how to write feature tests for express app

- improve unit tests / isolation - I think my testing could be improved
  - To do this I would spend more time researching testing techniques - google, mocha docs, stack overflow
  - Search for tutorials for examples on how to isolate / unit test express apps
  - Search Github for examples
  - Research options for mocking database calls / api calls  within tests - sinon?
  
- Data Validation
  - Data being added to the database has limited validation at the moment. I would look to improve this to protect data       integrity

- optional features
  - Learn more about code as infrastructure
  - aws
  - Research tools FT use

- refactoring

#### What it looks like

![alt text](https://i.imgur.com/x7YImWh.png)

![alt text](https://i.imgur.com/P7Q1CRZ.png)

![alt text](https://i.imgur.com/oTnjk1z.png)

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

## What FT are looking for
* Comfortable with code and infrastructure
* How I solve problems
* Code
* Infrastructure design

### Optional further features
* Templated infrastructure as code
* Automated testing - attempted
* Origami Components - attempted
* The ability to view the ratings / results - done
