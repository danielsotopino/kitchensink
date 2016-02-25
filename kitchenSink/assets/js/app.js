'use strict';

var kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp', ['ngRoute', 'ui.bootstrap']);

kitchenSinkBackOfficeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/index.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

kitchenSinkBackOfficeApp.controller('AdminCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http, AdminService) {
  $scope.formData = {};
  $scope.greetings = 'No greetings today';
  
  $http.get('http://localhost:1337/admin/index').success(function(data){
    $scope.greetings = data.greetings;
    console.log('Got this data: ' + data);
  });

}]);
