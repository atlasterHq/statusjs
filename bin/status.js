require('dotenv').config();
var express = require('express');

var app = express();

app.listen(process.env.HttpPort);
module.exports = app;
