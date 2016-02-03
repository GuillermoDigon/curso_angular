'use strict';

/**
 * @ngdoc overview
 * @name finalAngularApp
 * @description
 * # finalAngularApp
 *
 * Main module of the application.
 */
angular
  .module('finalAngularApp', [
    'ngResource',
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
      .otherwise({
        redirectTo: '/'
      });
  });
