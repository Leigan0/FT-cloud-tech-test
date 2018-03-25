# FT Cloud Engineer Technical Exercise

[![Build Status](https://travis-ci.org/Leigan0/test.svg?branch=master)](https://travis-ci.org/Leigan0/test)

## Exercise breakdown
* Build a website hosted in the cloud(AWS,Google, Heroku)
* Website asks for and stores a simple rating score for using ft
* Diagram of site architecture show key components

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

* git clone https://github.com/Leigan0/FT-cloud-tech-test.git
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

To maintain readability and extendability I have separated by controller into ratings and index files.

##### Application Architecture

![alt text](https://i.imgur.com/SB6Yutq.jpg)

##### Deployment Infrastructure

![alt text](https://i.imgur.com/ObPLBhR.jpg)

#### Technology decisions

I have decided to write this with JavaScript/Node.
I have some (limited) experience of this framework from my final project, but I am also keen to gain more knowledge and understanding.

I am using Express for my app routing, and Node.js to allow me to use JS in the front and backend.

Supertest: Allows me to test the controller with ease.

Mocha: Test framework that runs in the browser and on Node.js. I have chosen this because I wanted to learn a different testing framework (as I usually use Jasmine).

Chai: Allows should, expect and asserts matchers. Whilst I have not used this tech before, adding expect matchers makes the syntax more readable, so I have chosen to use this also.

Istanbul: I wanted to add a test coverage to allow some measure of my testing. Whilst I know it is not a strong indicator of test quality, it allows some insight, and highlights areas for consideration.

I used Heroku to host the website. I originally intended to use AWS however I have not had time
to fully understand how to deploy to AWS. I also wanted to be able to implement some level of continuous integration and continuous deployment. As I have some experience in Heroku, using this platform will allow me to look into this further.

Given more time I would gain further understanding and deploy to AWS using CloudFormation.

#### Testing & Implementation decisions

I have completed unit tests for express routes. When using Supertest I was running into 'server in use errors'. After researching this I believe the error was due to having server.listen within the server file which is required within the test files. To solve this I added the server.listen to a serverStart file. This allows supertest to set its own port and resolved the errors.

I wanted to improve my JavaScript code standards and consistency so I added eslint and configured this to run as part of the test suite. I also updated the git hooks pre-commit file to run npm test at each commit. I did this to ensure all tests are passing at each commit, with no linting issues.

To persist data I have decided to use mongoose with mongodb, hosted on the mlab platform. I have chosen mlab over running mongodb locally for ease of use, and to gain some further experience storing data in a cloud platform.

I do not have much knowledge of testing an express application, so I have found isolating the tests challenging. At the moment the test suite uses a test a mlab database which is cleared after the suite runs. As such the unit tests are not isolated, to solve this problem for unit tests I would look stub out database calls. For integration tests, an alternative would be to have the mongodb locally to remove the need api calls to mlab.

Once I had a basic app which displayed the form, and then saved a rating I decided to implement some additional features along with the MVP. I did this as I wanted to improve my understanding of CI/CD.

To automate testing I decided to set up continuous integration, to do this I chose to build using Travis. I chose Travis as I have used this before for Ruby projects. I have not used Travis for node projects or projects with mongodb. I ran into several problems, but resolved these by using the Travis docs available online.

Once CI was set up, I then deployed to Heroku. Again, I have not had any experience in deploying an express app to Heroku, or an app which uses mlab, so I followed this tutorial https://devcenter.heroku.com/articles/mongolab.

Once I completed this my was MVP met.

To improve automation and implement continuous deployment I have added script to travis.yml file to push to Heroku after a successful build. The app is now tested (tests / lint) and deployed on developer push to git. Keys in travis.yml are encrypted by travis.

As I have met the MVP I have chosen to implement some additional features. I also spent some time refactoring my tests to remove repeated code.

### Next steps

If I had more time my next considerations points would be:

- add feature tests, the application is currently not feature tested.
  - I would need to research how to write feature tests for express app using a web driver
- improve unit tests / isolation
  - To do this I would spend more time researching testing techniques - google, mocha docs, stack overflow
  - Search for tutorials for examples on how to isolate / unit test express apps
  - Search Github for examples
  - Research options for mocking database calls / api calls  within tests - sinon?
  
- Data Validation
  - Data being added to the database has limited validation at the moment. I would look to improve this to protect data       integrity

- optional features
  - Learn more about code as infrastructure
  - AWS
  - Research tools FT use

- refactoring

#### What it looks like

![alt text](https://i.imgur.com/mMtusrY.png)

![alt text](https://i.imgur.com/rNE9KIG.png)

![alt text](https://i.imgur.com/GtzI2qL.png)

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
