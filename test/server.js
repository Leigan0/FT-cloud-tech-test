var expect = require('chai').expect;
var request = require('request');

describe("FT Rating Collector", function(){
  describe("Homepage", function(){
    var url = 'http://localhost:3000/'

    it('returns status 200', function(){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('returns body of test', function(){
      request(url, function(error, response, body){
        expect(response.body).to.equal('test')
        done();
      });
    });
  });
});
