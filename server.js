const express = require('express');
const apiRouter = require('./api');
const ratings = require('./api/ratings');
const server  = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.port || 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', apiRouter);
server.use('/ratings', ratings);

server.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'});
});

server.set('view engine', 'pug');

var getUrl = function(){
  if (process.env.NODE_ENV == 'test') {
    return process.env.MONGOLAB_URI_TEST;
  } else {
    return process.env.MONGODB_URI;
  }
};

mongoose.connect(getUrl(), function (err){
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err );
  } else {
    console.log(`Connect established to ${getUrl()}`);
  }
});

module.exports = {
  server,
  port
};
