var express = require("express")
var app = express()
var body = require("body-parser")

var request = require("request");

app.use(body.urlencoded({extended:true}))
app.use(body.json());

request.get({
    headers: {'content-type': 'application/json'},
    url: 'http://13.126.147.241:8080/greeting'
}, function(error, response, body){
  console.log(body)
});
