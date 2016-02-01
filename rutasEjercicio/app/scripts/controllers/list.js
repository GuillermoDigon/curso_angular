angular.module('rutasEjercicioApp')
  .controller('ListCtrl', function ($scope, $http) {
    	$http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
		        .success(function(data) {
console.log('Llega al success del fichero list');
				$scope.terremotos = data['features'];
	            $scope.count = data['features'].length;
	        });

  });
