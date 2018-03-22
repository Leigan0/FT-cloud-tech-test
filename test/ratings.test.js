var { server: app } = require('../server');
var expect = require('chai').expect;
var request = require('supertest');

describe('POST/ratings/new - create new rating', () => {
  let rating = { rating: 4, username: 'TestUser' };
  it('should accept a new valid rating', ()=>{
    return request(app).post('/ratings/new')
      .send(rating)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.rating).to.be.a('number');
        expect(res.body.rating).to.equal(4);
        expect(res.body.username).to.be.a('string');
        expect(res.body.username).to.equal('TestUser');
      });
  });
});
