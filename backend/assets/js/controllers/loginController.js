kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp');

kitchenSinkBackOfficeApp.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location', 'Auth', function($scope, $rootScope, $http, $location, Auth) {
  	$scope.loginForm = {};

	$scope.login = function() {

	  Auth.login($scope.loginForm).success(function(result) {
        $location.path("/listProducts");
      }).error(function(err) {
        
      });

  	};

}]);