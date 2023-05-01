var express = require('express');
var router = express.Router();

con = require('../controllers/charactercontroller.js');

/* GET home page. */
router.get('/characters',con.getCharacters, function(req, res) {
  res.json({ characters: res.locals.characters });
});

router.get('/characters/:characters', con.getCharacter, function(req, res) {
  res.json({ character: res.locals.characters})
  
});

module.exports = router;
