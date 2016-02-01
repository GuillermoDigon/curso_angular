angular.module('rutasEjercicioApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $http) {
	  $scope.id = $routeParams.id;
console.table($routeParams);
	  
	  $http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/' + $scope.id + '.geojson')
	  	.success(function(data) {
	  		$scope.terremoto = data;
	  		
			var longitude = data.geometry.coordinates[0];
			var latitud = data.geometry.coordinates[1];
	  		$scope.img_mapa = "http://maps.google.com/maps/api/staticmap?sensor=false&center="
				+ latitud
				+ ","
				+ longitude
				+ "&zoom=4&size=300x400&markers=color:red|label:P|"
				+ latitud + ',' + longitude;
//console.log('img_mapa = ' + $scope.img_mapa);
	  	});
  });
