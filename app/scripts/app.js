'use strict';

/**
 * @ngdoc overview
 * @name corlateApp
 * @description
 * # corlateApp
 *
 * Main module of the application.
 */
angular
  .module('corlateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/paginas', {
        templateUrl: 'views/paginas.html',
        controller: 'PaginasCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
