var express = require('express');
const apiRouter = require('./api');
const ratings = require('./api/ratings');
const server  = express();
var bodyParser = require('body-parser');

var port = process.env.port || 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', apiRouter);
server.use('/ratings', ratings);

server.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'});
});

server.set('view engine', 'pug');

module.exports = {
  server,
  port
};
