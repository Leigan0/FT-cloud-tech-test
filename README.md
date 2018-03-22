# FT Cloud Engineer Technical Exercise

## What FT are looking for
* Comfortable with code and infrastructure
* How I solve problems
* Code
* Infrastructure design

## Exercise breakdown
* Build a website hosted in the cloud(AWS,Google, Heroku)
* Website asks for and stores a simple rating score for using ft
* Diagram of site architecture show key components

## Optional
* Templated infrastructure as code
* Automated testing
* Origami Components
* The ability to view the ratings / results

### My approach

I have decided to write this with Javascript/Node as I have some (limited) experience in this language
and as per the spec this language is commonly used at FT.

I will use heroku to host the website.

My first task will be to build a simple version of the app

MVP
* Homepage with form to enter rating
* Data (rating) persisted
* hosted on cloud

I am using Express for my app routing.

Testing
Supertest: Allows me to test API
Mocha: Test framework that runs in the browser and on Node.js
Chai: Allows should, expect and asserts matchers

I have completed unit test for express, I have pulled server.listen out to serverStart
so I do not have to set a port for testing, supertest will deal with this. This also ensures server
closed between tests and does not cause server in use errors.

I have added eslint, and configured this to run pretest script. This has been automated to a degree
as linter will now run before tests - tests will not run until eslint has no errors.
I have also updated git hooks, pre-commit file to run npm pretest at each commit.
To automate linting and tests prior to each commit.

Once I researched a way to ensure linting was ran before each commit, I have also
updated the git/hooks/pre-commit file to run my npm test script to ensure linting
and testing is completed prior to every commit. This ensures I cannot commit if tests not passing
linting errors not resolved.

To persist data I have decided to use mongoose / mongodb. No requirement for relational database, so no
reason to use postgres - have some experience mongoose.

Need to set up environment variable MONGOLAB_URI_TEST / MONGOLAB URI and mlab test database

I have attempted to isolate my tests as much as possible.
Test suit saves to a test database which is cleared after test suite runs - may need to look at cleaning between each test
when testing get methods ( if move onto this)

Need add to cloud platform.
