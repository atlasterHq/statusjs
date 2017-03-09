const angular = require('angular');

var app = angular.module('application');

app.controller('configCtrl',require('./config'));
app.controller('statusCtrl',require('./status'));
