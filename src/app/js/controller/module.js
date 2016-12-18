'use strict';

var app = require('angular').module('browserifyeg');

app.service('MainService', require('./mainService'));
app.controller('MainCtrl', require('./mainCtrl'));
