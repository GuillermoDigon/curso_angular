angular.module('rutasApp')
  .controller('AboutCtrl', function ($scope, $timeout, $location) {
	    $scope.mensaje = "Este mensaje es del controlador AboutCtrl";
	    
	    $timeout(function(){
	    	$scope.mensaje = "Nuevo mensaje tras pasar un timeout de 2 segundos"
	    }, 2000)
  });
