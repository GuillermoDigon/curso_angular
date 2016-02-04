'use strict';

/**
 * @ngdoc function
 * @name finalAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalAngularApp
 */
angular.module('finalAngularApp')

	.controller("FavoritesCtrl", ['$scope','FeedService', function ($scope,Feed) {
		$scope.favoritos = [	// TODO: Lo ideal seria leer estos datos de una base de datos (p.e. en MongoDB)
		                    {medio: 'El País', seccion: 'Internacional', titulo: 'Internacional 1', autor: 'Autor 1'},
		                    {medio: 'El País', seccion: 'Internacional', titulo: 'Internacional 2', autor: 'Autor 2'},
		                    {medio: 'El País', seccion: 'Cultura', titulo: 'Cultura 1', autor: 'Autor 2'},
		                    {medio: 'ABC', seccion: 'Internacional', titulo: 'Internacional 1', autor: 'Autor 3'},
		                    {medio: 'ABC', seccion: 'Cultura', titulo: 'Cultura 1', autor: 'Autor 4'},
		                    {medio: 'ABC', seccion: 'Cultura', titulo: 'Cultura 2', autor: 'Autor 3'}
		];
	}]);
	
	/*.factory('FeedService',['$http',function($http){
		return {
			parseFeed : function(url){
				return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
			}
		}
	}]);*/
