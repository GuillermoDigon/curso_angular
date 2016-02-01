angular.module('rutasApp')
  .controller('MainCtrl', function ($scope, $interval) {
	    $scope.mensaje = "Este mensaje es del controlador MainCtrl";
	    
	    $scope.hora = new Date().toLocaleTimeString();
	    
	    $interval(function(){
	    	$scope.hora = new Date().toLocaleTimeString();
	    }, 1000)
  });
