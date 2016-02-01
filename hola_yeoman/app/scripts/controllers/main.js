'use strict';

/**
 * @ngdoc function
 * @name holaYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holaYeomanApp
 */
angular.module('holaYeomanApp')
  .controller('MainCtrl', function ($scope) {
	  var main = true;
	  $scope.url = "views/main.html";
	  $scope.elementos = ["elemento1","elemento2","elemento3"];
	  
	  $scope.toggle = function() {
		  if (main)
			  $scope.url = "views/tabla.html";
		  else 
			  $scope.url = "views/main.html";
		  main = !main;
	  } 
  })
//  .config(function($sceDelegateProvider){
//	  $sceDelegateProvider.resourceUrlWhitelist(["http://www.refsnesdata.no/**"]);
//  });
