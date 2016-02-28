'use strict';

var kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp', ['ngRoute', 'ui.bootstrap']);

kitchenSinkBackOfficeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/index.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
    $routeProvider.when('/addProduct', {
      templateUrl: '/templates/addProduct.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

kitchenSinkBackOfficeApp.controller('AdminCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http, AdminService) {

}]);
