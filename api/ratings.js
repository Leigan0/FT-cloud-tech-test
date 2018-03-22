var express = require('express');
const router = express.Router();

router.post('/new', (req, res) =>{
  res.send(req.body);
});

module.exports = router;
