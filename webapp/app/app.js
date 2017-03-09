var angular = require('angular');
var ngRoute = require('angular-route');
var rest    = require('restangular');

angular.module("application",[ngRoute,rest]);
require('./routes');
require('./controllers');
