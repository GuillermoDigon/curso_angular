'use strict';

/**
 * @ngdoc function
 * @name finalAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the finalAngularApp
 */
angular.module('finalAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
