'use strict';

/* Controllers */

var fashiolistaControllers = angular.module('fashiolistaControllers', []);

fashiolistaControllers.controller('LookListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('looks/data.json').success(function(data) {
      $scope.trends = data;
    });
  }
]);