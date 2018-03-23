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
          expect(res.text).to.include('Welcome to our website rater');
          expect(res.text).to.include('Please enter your rating');
          expect(res.text).to.include('<form class="o-forms" action="/ratings/new" method="POST"><div class="o-forms">');
          expect(res.text).to.include('input class="o-forms__text" id="o-forms-standard" type="text" name="username" required="">');
          expect(res.text).to.include('<select class="o-forms__select" id="select-standard" type="text" name="rating">');
          expect(res.text).to.include('type="submit">Submit</button></form>');
        });
    });
    it('displays a link to view ratings', () => {
      return request(app)
        .get('/')
        .then(res => {
          expect(res.text).to.include('href="/ratings">Our Ratings');
        });
    });
  });
});
