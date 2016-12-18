'use strict';

var angular = require('angular');
var route = require('angular-route');

var app = angular.module('browserifyeg', [ 'ngRoute' ]);

require('./controller/module');

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
  });
});