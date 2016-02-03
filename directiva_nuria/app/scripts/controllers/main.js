'use strict';

/**
 * @ngdoc function
 * @name directivaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directivaApp
 */
angular.module('directivaApp')
  .controller('MainCtrl', function ($scope,$location,$rootScope) {
	  $scope.productos=[{nombre:'mesa',cantidad:50,precio:75,disponible:true},
	                    {nombre:'silla',cantidad:200,precio:40,disponible:false},
	                    {nombre:'puerta',cantidad:30,precio:200,disponible:true}];
	  
	  $scope.seleccionar=function(x){
		  console.log(x);
		  $rootScope.producto=x;
		  $location.path('/about')
		  
	  }
  });
