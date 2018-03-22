const mongoose = require('mongoose');
const Rating = require('../models/ratings');

describe('Database tests', function(){
  before(function (done){
    mongoose.connect('mongodb://lgant:123@ds121299.mlab.com:21299/ft-test-db');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test database', function(){
    it('Can save a valid rating', function(done){
      var testRating = Rating({
        username: 'Test123',
        rating: 1
      });
      testRating.save(done);
    });
    it('Will not save incorrect format to database - username', function(done) {
      var wrongSave = Rating({
        notUsername: 'Test123',
        rating: 1
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });
    it('Will not save incorrect format to database - rating', function(done) {
      var wrongSave = Rating({
        username: 'test123',
        rating: 'hello'
      });
      wrongSave.save(err => {
        if(err) { return done();}
        throw new Error('Should generate error!');
      });
    });
    it('Will not save incorrect format to database - username', function(done) {
      var wrongSave = Rating({
        username: 'Test123',
        notRating: 1
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });
    it('Should retrieve data from test database', function(done) {
      Rating.find({username: 'Test123'}, (err, name) => {
        if(err) {throw err;}
        if(name.length === 0) {throw new Error('No data!');}
        done();
      });
    });
    after(function(done){
      mongoose.connection.db.dropDatabase(function(){
        mongoose.connection.close(done);
      });
    });
  });
});
