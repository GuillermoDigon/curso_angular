angular.module('rutasEjercicioApp')
  .controller('MainCtrl', function ($scope, $interval, $http) {
	    $scope.count = 0;
	    $scope.terremotos = [];
	    $scope.hora = new Date().toLocaleTimeString();
	    
	    $interval(function(){
	    	$scope.hora = new Date().toLocaleTimeString();

	    	$http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
		        .success(function(data) {
console.log('Mensaje del success');
					$scope.terremotos = data['features'];
		            $scope.count = data['features'].length;
		        });
	    }, 1000)

  });
