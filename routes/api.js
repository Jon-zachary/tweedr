var express = require('express');
var router = express.Router();
var db = require('../db/queries');

// API get route, sends back a JSON obecgt with all the tweeds
router.get('/api',function(req,res,next) {
	db.getTweeds(req,res);
});
//API post route, inserts tweed into db
router.post('/api',function(req,res,next){
	db.postTweed(req,res);
})
module.exports = router;