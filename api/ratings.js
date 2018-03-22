var express = require('express');
const Rating = require('../models/ratings');
const router = express.Router();

router.post('/new', (req, res) =>{
  let data = new Rating({
    username: req.body.username,
    rating: req.body.rating
  });
  data.save()
    .then(rating => {
      res.render('rating_confirmation',{username: rating.username, rating: rating.rating} );
    })
    .catch(() =>{
      res.status(400).send('unable to save to database');
    });
});

module.exports = router;
