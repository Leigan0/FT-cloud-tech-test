var { server: app } = require('../server'); // because module exports two things
var expect = require('chai').expect;
var request = require('supertest');

describe('FT Rating Collector', function(){
  describe('Homepage #GET/', function(){
    it('returns status 200', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).to.equal('test');
        });
    });
  });
});
