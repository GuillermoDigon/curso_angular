'use strict';

/**
 * @ngdoc overview
 * @name rutasEjercicioApp
 * @description
 * # rutasEjercicioApp
 *
 * Main module of the application.
 */
angular
  .module('rutasEjercicioApp', [
    'ngRoute'
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
      .when('/listado', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
