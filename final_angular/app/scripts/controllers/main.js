'use strict';

/**
 * @ngdoc function
 * @name finalAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalAngularApp
 */
angular.module('finalAngularApp')

	.controller("MainCtrl", ['$scope','FeedService', function ($scope,Feed) {    
		$scope.loadButonText="Load";
		
		$scope.loadFeed=function(e){
			Feed.parseFeed($scope.feedSrc).then(function(res){
				$scope.loadButonText=angular.element(e.target).text();
				$scope.feeds=res.data.responseData.feed.entries;
console.table($scope.feeds);
			});
		}
		
		$scope.listamedios = [];
		$scope.listasecciones = [];
		$scope.filtro = [];
		$scope.data = [
			{
				nombre:"El País", 
				secciones: [
					{nombre: 'España', url: 'http://ep00.epimg.net/rss/politica/portada.xml'},
	               	{nombre: 'Internacional', url: 'http://ep00.epimg.net/rss/internacional/portada.xml'},
	               	{nombre: 'Cultura', url: 'http://ep00.epimg.net/rss/cultura/portada.xml'},
	               	{nombre: 'Deportes', url: 'http://ep00.epimg.net/rss/deportes/portada.xml'}
	              ]
			}, 
			{
				nombre:"ABC", 
				secciones: [
					{nombre: 'España', url: 'http://www.abc.es/rss/feeds/abc_EspanaEspana.xml'},
	               	{nombre: 'Internacional', url: 'http://www.abc.es/rss/feeds/abc_Internacional.xml'},
	               	{nombre: 'Cultura', url: 'http://www.abc.es/rss/feeds/abc_Cultura.xml'},
	               	{nombre: 'Deportes', url: 'http://www.abc.es/rss/feeds/abc_Deportes.xml'}
	              ]
			}, 
			{
				nombre:"El Mundo", 
				secciones: [
					{nombre: 'España', url: 'http://estaticos.elmundo.es/elmundo/rss/espana.xml'},
	               	{nombre: 'Internacional', url: 'http://estaticos.elmundo.es/elmundo/rss/internacional.xml'},
	               	{nombre: 'Cultura', url: 'http://estaticos.elmundo.es/elmundo/rss/cultura.xml'},
	               	{nombre: 'Deportes', url: 'http://estaticos.elmundo.es/elmundodeporte/rss/portada.xml'}
	              ]
			}, 
		];
		
		$scope.loadMedios=function(e){
			$scope.listamedios = [];
			$('#block_medios').find('input[type="checkbox"]:checked').each(function() {
				$scope.listamedios.push($(this).val());
			});
//console.log('== Medios == ' + JSON.stringify($scope.listamedios));
		}
		$scope.loadSecciones=function(e){
			$scope.listasecciones = [];
			$('#block_secciones').find('input[type="checkbox"]:checked').each(function() {
				$scope.listasecciones.push($(this).val());
			});
//console.log('== Secciones == ' + JSON.stringify($scope.secciones));
		}
		$scope.loadData=function(e){ // FIXME: Terminar este método
console.log('Inicio del método loadData');
			$scope.filtro = [];
angular.forEach($scope.data, function(item) {
	if ($scope.listamedios.indexOf(item.nombre)){ // Verifica para cada uno de los medios si está seleccionado 
		angular.forEach(item.secciones, function(seccion) {
			console.log("seccion: " + seccion.nombre + "; url: " + seccion.url);
		})
	}
});			
//console.log('== Medios == ' + JSON.stringify($scope.listamedios));
		}
	}])
	
	.factory('FeedService',['$http',function($http){
		return {
			parseFeed : function(url){
				return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
			}
		}
	}]);
