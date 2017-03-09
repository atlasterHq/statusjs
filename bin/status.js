require('dotenv').config();
var express = require('express');

var app = express();
app.use(express.static('dist'));

app.listen(process.env.HttpPort);
module.exports = app;
