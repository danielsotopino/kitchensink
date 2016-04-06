kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp');

kitchenSinkBackOfficeApp.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
  	$scope.loginForm = {};

	$scope.login = function() {

  		$http.post('http://localhost:1337/auth/authenticate', $scope.loginForm).then(function(response) {
			$location.path("/listProducts");

		}, function(response) {

		    $scope.success = response;

		});

  	};

}]);