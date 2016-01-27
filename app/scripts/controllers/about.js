'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
