var express = require('express');
var request = require("request");

var app = express();

var steamAPI = "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=21575B9631850EA21215B1DA1B6A9D79&language=en_us";


app.get('/', function (req, res) {
	 res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


request(steamAPI, function(error, response, body) {
  // console.log(error);
  // console.log(response);
  // console.log(body);
  res.send(body);
});


//JSON.parse(yourJsonString);

// console.log(respon);
  
});

app.listen(3001, function () {
	
  console.log('Example app listening on port 3001!');
});