var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var path = require('path');
router.use(function(request,response, next){
	response.sendFile(path.join(__dirname,'../public'+request.path), function (err) {
		console.log("request")
    if (err) {
      next()
    }
    else {
      console.log('Sent:', request.path);
    }
  });
});



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;


