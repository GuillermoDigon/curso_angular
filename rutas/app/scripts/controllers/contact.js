angular.module('rutasApp')
  .controller('ContactCtrl', function ($scope, $location) {
	    $scope.url = $location.absUrl();
	    $scope.mensaje = "Este mensaje es del controlador ContactCtrl. Esta página tiene asociada la url: " + $scope.url;
	    
  });
