'use strict';

/**
 * @ngdoc function
 * @name finalAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalAngularApp
 */
angular.module('finalAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
