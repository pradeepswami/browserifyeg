'use strict';

module.exports = function($scope, MainService) {
  $scope.name = MainService.getName();
};