require('dotenv').config();
var express = require('express');
var statusLib  = require('../lib/status');
var status = new statusLib();

status.add("Google","http://clients1.google.com/generate_204");
status.update();

var app = express();
app.use(express.static('dist'));

app.get("/config",function(req,res){
  res.json({name:process.env.AppName});
});

app.get("/status",function(req,res){
  res.json(status.print());
});

setInterval(function(){
  status.update();
},parseInt(process.env.UpdateTime,10));

app.listen(process.env.HttpPort);
module.exports = app;
