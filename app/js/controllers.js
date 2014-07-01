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

fashiolistaControllers.controller('CarouselCtrl', ['$scope', '$http',
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

      $scope.setTitleNext = function(index) {
        var length = $scope.looks.length;
        if (index < length - 1) {
          index = index + 1;
        }
        var id = $scope.looks[index].id;
        $scope.currentTrendTitle = $scope.trends[id].title;
        $scope.currentSubTitle = $scope.trends[id].sub_title;

      }

      $scope.setTitlePrev = function(index) {
        if(index > 0) {
          index = index - 1;
        }
        else index = index;

        var id = $scope.looks[index].id;
        $scope.currentTrendTitle = $scope.trends[id].title;
        $scope.currentSubTitle = $scope.trends[id].sub_title;
      }

    });
  }]);