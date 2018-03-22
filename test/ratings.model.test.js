const Rating = require('../models/ratings');

describe('Database tests', function(){
  describe('Test database - testing development model', function(){
    it('Can save a valid rating', function(done){
      var testRating = Rating({
        username: 'Test123',
        rating: 1
      });
      testRating.save(done);
    });
    it('Will not save incorrect format to database - username', function() {
      var wrongSave = Rating({
        notUsername: 'Test123',
        rating: 1
      });
      wrongSave.save(shouldRaiseError);
    });
    it('Will not save incorrect format to database - rating', function() {
      var wrongSave = Rating({
        username: 'test123',
        rating: 'hello'
      });
      wrongSave.save(shouldRaiseError);
    });
    it('Will not save incorrect format to database - username', function() {
      var wrongSave = Rating({
        username: 'Test123',
        notRating: 1
      });
      wrongSave.save(shouldRaiseError);
    });
    it('Should retrieve data from test database', function(done) {
      Rating.find({username: 'Test123'}, (err, name) => {
        if(err) throw err;
        if(name.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });
});

var shouldRaiseError = function(err){
  if(err) return;
  throw new Error('Should generate error');
};
