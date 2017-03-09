var angular = require('angular');
var ngRoute = require('angular-route');

angular.module("application",[ngRoute]);
require('./routes');
require('./controllers');
