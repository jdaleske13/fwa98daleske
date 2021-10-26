var express = require('express');
var router = express.Router();

/* Page about Jacob Daleske */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jacob Daleske' });
});

module.exports = router;
