'use strict';

/* Directives */

var fashiolistaDirectives = angular.module('fashiolistaDirectives', []);

fashiolistaDirectives.directive('resizable', function($window) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.innerHeight;
      $scope.windowWidth = $window.innerWidth;

      if ($scope.windowWidth < 768) {
        $scope.res = 'small';
      }
      else if ($scope.windowWidth > 991) {
        $scope.res = 'big';
      }
      else $scope.res = 'medium';
    };

    $scope.initializeWindowSize();
    return angular.element($window).bind('resize', function() {
      $scope.initializeWindowSize();
      return $scope.$apply();
    });
  };
});
