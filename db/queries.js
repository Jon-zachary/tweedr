var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

//Gets all tweeds from the database and delivers a json object with the data
function getTweeds(req,res) {
  db.any('SELECT * FROM tweeds')
  .then(function(data){
    res.json({
      message: 'ok',
      data: data
    })
  });
};
function postTweed(req,res){ 
db.none('INSERT INTO tweeds(tweed) VALUES($1)', [req.body.tweed])
    .then((res) => {
       console.log(res);
    })
   }
    module.exports = { getTweeds:getTweeds,
                   postTweed:postTweed };