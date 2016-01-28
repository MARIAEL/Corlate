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
   
    $scope.busca=function(){
    	if ($scope.busqueda==undefined || $scope.busqueda=='') {  
    	  	alert ('escribe algo');
    }
    else {
    	alert($scope.busqueda);
    }
        
    }

  });
