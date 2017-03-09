var angular = require('angular');

angular
  .module("application")
  .config(function($routeProvider,$locationProvider){
    $routeProvider
      .when("/",{
        templateUrl: "/templates/application.html"
      });
    $locationProvider.html5Mode(true);
  });
