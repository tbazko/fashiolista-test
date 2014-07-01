'use strict';

/* Services */

var fashiolistaServices = angular.module('fashiolistaServices', []);

fashiolistaServices.factory('res', ['$window',
  function($window){
    var res = {};

    res.getResolution = function() {
      var windoWidth = $window.innerWidth;
      var res;

      if (windowWidth < 768) {
        res = 'small';
      }
      else if (windowWidth > 991) {
        res = 'big';
      }
      else res = 'medium';
    }
    return res;

  }]);