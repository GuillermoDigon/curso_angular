angular.module('directivaYeomanApp', ['pascalprecht.translate'])
  .controller('MainCtrl', function ($scope, $translate) {
	  //$scope.nombre = "valor1";
	  
	  $scope.idioma = "es";
		
	  $scope.cambiarIdioma = function ($key) {
		  $scope.idioma = $key; 
		  $translate.use($key);
	  };
	  
	  /* $scope.alternarIdioma = function () {
		  $scope.idioma = ($scope.idioma=="es")?"en":"es"; 
		  $translate.use($scope.idioma);
	  }; */
  })
  
  .config(function ($translateProvider) {
	$translateProvider.translations('es', {
		NOMBRE: 'Nombre',
		CANTIDAD: 'Cantidad',
		PRECIO: 'Precio',
		DISPONIBLE: 'Disponible',
		
		NOMBRE_PLACEHOLDER: 'Introduce el nombre del producto',
		BUTTON_LANG: 'Cambiar idioma'
	});
			
	$translateProvider.translations('en', {
		NOMBRE: 'Name',
		CANTIDAD: 'Quantity',
		PRECIO: 'Price',
		DISPONIBLE: 'Availability',

		NOMBRE_PLACEHOLDER: 'Enter the product name',
		BUTTON_LANG: 'Change language'
	});
			
	$translateProvider.preferredLanguage('es');
  })

  .directive('detalleProducto', function () {
	  return {
		restrict: 'E',
		scope: {
			nombre:'=',
			cantidad:'=',
			precio:'=',
			disponible:'='
		},
		template:
			'<form>' +
				'<div class="form-group">' + 
					'<label for="nombre">{{"NOMBRE" | translate}}</label>' + 
					'<input class="form-control" type="text" value="{{nombre}}" />' + 
				'</div>' + 
				'<div class="form-group">' +
					'<label for="cantidad">{{"CANTIDAD" | translate}}</label>' + 
					'<input class="form-control" type="text" value="{{cantidad}}" />' + 
				'</div>' + 
				
				'<div class="form-group">' +
					'<label for="precio">{{"PRECIO" | translate}}</label>' + 
					'<input class="form-control" type="text" value="{{precio}}" />' + 
				'</div>' +
				'<div class="form-group">' +
					'<label for="disponible">{{"DISPONIBLE" | translate}}</label>' + 
					'<input class="form-control" type="text" value="{{disponible}}" />' + 
				'</div>' +
			
			'<form>'
	  }
  });
