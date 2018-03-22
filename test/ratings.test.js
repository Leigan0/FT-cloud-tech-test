const mongoose = require('mongoose');
var { server: app } = require('../server');
var expect = require('chai').expect;
var request = require('supertest');

describe('POST/ratings/new - create new rating', () => {
  var testRating = { username: 'Test123', rating: 4 };
  var invalidRating = { rating: 1 };

  it('should not accept a new invalid rating', (done)=>{
    request(app).post('/ratings/new')
      .send(invalidRating)
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.equal('unable to save to database');
        done();
      });
  });
  it('should accept a new valid rating', (done)=>{
    request(app)
      .post('/ratings/new')
      .send(testRating)
      .end((err,res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should redirect to confirmaton page', (done)=> {
    request(app)
      .post('/ratings/new')
      .send(testRating)
      .expect('Location', '/ratings')
      .end(() => {
        done();
      });
  });
  it('should confirm rating added with username and rating', (done)=> {
    request(app)
      .post('/ratings/new')
      .send(testRating)
      .expect('Location', '/ratings')
      .end((err, res) => {
        expect(res.text).to.include('Thank you for submitting your review');
        expect(res.text).to.include('Test123');
        expect(res.text).to.include('You rated us');
        expect(res.text).to.include('4');
        done();
      });
  });
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});
