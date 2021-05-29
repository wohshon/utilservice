var express = require('express');
var router = express.Router();
var ip = require("ip");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET");
  console.log(req.ips);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  console.log ("ip: "+ip.address() );
  res.status(200).send("OK");
});

/* GET home page. */
router.get('/hello/:message', function(req, res, next) {
  console.log("GET /hello");
  console.log(req.ips);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  console.log ("ip: "+ip.address() );
  res.status(200).send("OK");
});


router.post('/', function(req, res, next) {
  console.log("POST");
  console.log(req.ips);
  console.log(req.headers);
  console.log(req.body);
  console.log ("ip: "+ ip.address() );
  res.status(200).send("OK");
});


module.exports = router;
