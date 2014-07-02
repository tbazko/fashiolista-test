'use strict';

/* Controllers */

var fashiolistaControllers = angular.module('fashiolistaControllers', []);

fashiolistaControllers.controller('DesktopListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('looks/data.json').success(function(data) {
      $scope.trends = data;
    });
  }
]);

fashiolistaControllers.controller('MobileCarouselCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $http.get('looks/data.json').success(function(data) {
      $scope.trends = data;

      var looks = $scope.looks = [];
      for (var i=0; i < $scope.trends.length; i++) {
        for (var j=0; j < $scope.trends[i].looks.length; j++){
          $scope.trends[i].looks[j].id = i;
          looks.push($scope.trends[i].looks[j]);
        }
      };

      $scope.currentTrendTitle = $scope.trends[0].title;
      $scope.currentSubTitle = $scope.trends[0].sub_title;

      $scope.setTitle = function(index) {
        var id = $scope.looks[index].id;
        $scope.currentTrendTitle = $scope.trends[id].title;
        $scope.currentSubTitle = $scope.trends[id].sub_title;
      }

    });
  }]);