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

I have decided to write this with Javascript/Node as I have some experience in this language
and as per the spec this language is commonly used at FT.

I have used heroku before, but I am interested in learning about new technologies
so I will aim to host my website in aws as I have not tried this before.
I also have very little experience in continuous deployment and Automated testing.
As this relates to the role would help to meet an optional objective I would like to try
to set up my app with a continuous deployment pipeline (this may be a little ambitious).

To research this I have visted the aws website and found this tutorial.
https://aws.amazon.com/getting-started/tutorials/continuous-deployment-pipeline/

My first task will be to build a simple version of the app

MVP
* Homepage with form to enter rating
* Data (rating) persisted

I am using Express for my app routing. I will use mocha and chai for the testing framework.
