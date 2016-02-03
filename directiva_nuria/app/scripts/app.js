'use strict';

/**
 * @ngdoc overview
 * @name directivaApp
 * @description
 * # directivaApp
 *
 * Main module of the application.
 */
angular
  .module('directivaApp', [
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider,$translateProvider) {
	
	$translateProvider
	  .translations('es',{
		  NOMBRE:'Nombre',
		  CANTIDAD: 'Cantidad',
		  PRECIO: 'Precio',
		  DISPONIBLE:'Disponible'
	  })
	  .translations('en',{
		  NOMBRE:'Name',
		  CANTIDAD: 'Quantity',
		  PRECIO: 'Price',
		  DISPONIBLE:'Available'
	  })
	 .preferredLanguage('es');
	  
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('detalle', function(){
  	return {restrict:'E'
  		  , scope:{
  			  item:'='
  		  }
  	   	  , templateUrl:"views/directiva.html"}
  });
