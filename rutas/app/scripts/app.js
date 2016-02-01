'use strict';

/**
 * @ngdoc overview
 * @name rutasApp
 * @description
 * # rutasApp
 *
 * Main module of the application.
 */
angular
  .module('rutasApp', ['ngRoute'])
  .config(function($routeProvider){
	  $routeProvider
	  		.when('/', {
	  			templateUrl: 'views/main.html',
	  			controller: 'MainCtrl'
	  		})
	  		.when('/about', {
	  			templateUrl: 'views/about.html',
	  			controller: 'AboutCtrl'
	  		})
	  		.when('/contact', {
	  			templateUrl: 'views/contact.html',
	  			controller: 'ContactCtrl'
	  		})
	  		.otherwise({
	  			redirectTo: '/'
	  		})
  });
