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
		$scope.listafavoritos = [];
		$scope.urls = [];
		$scope.listamedios = [];
		$scope.listasecciones = [];
		$scope.allFeeds = [];
		$scope.data = [
			{
				nombre:"El País", 
				secciones: [
					{nombre: 'España', url: 'http://ep00.epimg.net/rss/politica/portada.xml'}, // FIXME
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
		}
		$scope.loadSecciones=function(e){
			$scope.listasecciones = [];
			$('#block_secciones').find('input[type="checkbox"]:checked').each(function() {
				$scope.listasecciones.push($(this).val());
			});
		}
		$scope.loadData=function(e){
			//$scope.filtro = [];
			$scope.urls = [];
			$scope.allFeeds = [];
			
			angular.forEach($scope.data, function(item) {
				if ($scope.listamedios.indexOf(item.nombre) != -1){ // Verifica si el checkbox de un determinado medio fue seleccionado 
var secciones_aux = [];
					angular.forEach(item.secciones, function(seccion) {
						if ($scope.listasecciones.indexOf(seccion.nombre) != -1){ // Verifica si el checkbox de una determinada sección fue seleccionado
console.log("medio: " + item.nombre + "; seccion: " + seccion.nombre + "; url: " + seccion.url);
							$scope.urls.push({medio: item.nombre, seccion: seccion.nombre, url: seccion.url});
secciones_aux.push({nombre: seccion.nombre, url: seccion.url});
						}
					})
					//$scope.filtro.push({nombre: item.nombre, secciones: secciones_aux});
				}
			});
//console.table($scope.urls); // ["http://www.abc.es/rss/feeds/abc_EspanaEspana.xml", "http://www.abc.es/rss/feeds/abc_Internacional.xml", ...]
		}

		
		$scope.loadButonText="Load";
		
		$scope.loadFeed=function(e){
			$scope.loadMedios();
			$scope.loadSecciones();
			$scope.loadData();

			$scope.urls.forEach(function(item){
				$scope.feeds = [];
				Feed.parseFeed(item.url).then(function(res){
					$scope.loadButonText=angular.element(e.target).text();
					$scope.feeds=res.data.responseData.feed.entries;
					$scope.feeds.forEach(function(feed) {
						feed.medio = item.medio; 
						feed.seccion = item.seccion; 
					});
					$scope.allFeeds = $scope.allFeeds.concat($scope.feeds); // Concatena el listado de feeds de cada fichero xml leido
				});
			});
		}
		
		$scope.isFavorite=function(index){
			if ($scope.allFeeds[index].favorito == true)
				return true;
			return false;
		}
		
		$scope.addFavorite=function(index){
console.table($scope.allFeeds[index]);
			$scope.allFeeds[index].favorito = true;
			//item.favorito = true;
			$scope.listafavoritos.push($scope.allFeeds[index]);
		}

		$scope.removeFavorite=function(index){
console.table($scope.allFeeds[index]);
			$scope.allFeeds[index].favorito = false;
			//item.favorito = false;
			$scope.listafavoritos.splice(index,1);
		}
		
	}])
	
	.factory('FeedService',['$http',function($http){
		return {
			parseFeed : function(url){
				return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
			}
		}
	}]);
