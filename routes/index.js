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

router.get('/users/:name/tweets/:id', function(request, response) {
  var tweet = tweetBank.find({firstName: request.params.name, id:request.params.id});
  console.log(tweet);
  response.render('index', {title: 'Twitter.js - Post ID#'+ request.params.id +' by '+request.params.name, tweets: tweet});
});




router.get('/users/:name', function(request, response) {

  //   response.render('index', )
  //   response.send(output);
  // }
  // var name = request.params.name;
  // var list = tweetBank.find({name:name}).map(function(tweet){return tweet.text}).join('<br>');

  var tweetsByUser = tweetBank.find({firstName: request.params.name});
  if (tweetsByUser.length) {
    //var output = tweetsByUser.map(function(tweet){return tweet.text}).join('<br>');
    //console.log(output);
    response.render('index', {title: 'Twitter.js - Posts by '+request.params.name, tweets: tweetsByUser});
  }

});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


module.exports = router;


