'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
