var { server: app } = require('../server'); // because module exports two things
var expect = require('chai').expect;
var request = require('supertest');

describe('FT Rating Collector', function(){
  describe('Homepage #GET/', function(){
    it('returns status 200 and FT ratings header', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).to.include('FT ratings');
        });
    });
    it('returns welcome information and review form', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).to.include('Welcome to Financial Times Website Rater');
          expect(res.text).to.include('Please rate our website');
          expect(res.text).to.include('<form action="/ratings/new" method="POST">');
          expect(res.text).to.include('Username:<input type="text" name="username" value=""/>');
          expect(res.text).to.include('Rating:<input type="text" name="rating" value=""/>');
          expect(res.text).to.include('<input type="submit" value="Submit"/></form>');
        });
    });
  });
});
