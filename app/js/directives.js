'use strict';

/* Directives */

var fashiolistaDirectives = angular.module('fashiolistaDirectives', []);

fashiolistaDirectives.directive('resizable', function($window) {
  return function($scope) {
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.innerHeight;
      $scope.windowWidth = $window.innerWidth;
      if ($scope.windowWidth < 480) {
        $scope.res = 'xs';
      }
      else if ($scope.windowWidth < 768) {
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

fashiolistaDirectives.directive('elresize', ['$window', function($window) {
  return {
    link: function(scope, elem, attrs) {
      scope.onResize = function() {
        var width = window.innerWidth;
        var template = (width < 768) ? 'partials/mobile.html' : 'partials/desktop.html';
        return template;
      }
      scope.onResize();

      angular.element($window).bind('resize', function() {
        scope.onResize();
      })
    },
    template: "<div ng-include='onResize()'></div>"
  }
}]);

fashiolistaDirectives.directive('indexChange', function($timeout) {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      scope.$watch('carouselIndex', function(newValue, oldValue) {
        scope.index = newValue;
        var event = new Event('slide');
        scope.$broadcast('slide');
        $timeout(function() {
          scope.$apply();
        }, 0, false);
      });
    }
  }
}).directive('indexChanged', function() {
  return {
    link: function(scope, element, attrs) {
      scope.$on('slide', function() {
        scope.setTitle(scope.index);
      });
    }
  }
});