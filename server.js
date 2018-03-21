var express = require('express');
const apiRouter = require('./api');
const server  = express();
var port = process.env.port || 3000;

server.use('/', apiRouter);

server.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'});
});

module.exports = {
  server,
  port
};
