kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp');

kitchenSinkBackOfficeApp.controller('UserCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

	$scope.userForm = {};

	$scope.saveUser = function() {
		
  		$http.post('http://localhost:1337/user/create', $scope.userForm).then(function(response) {
			$scope.form.$setPristine();
			$scope.form.$setUntouched();
			$scope.userForm = {};
			$scope.success = 'Registro exitoso !';

		}, function(response) {

		    $scope.success = response;

		});

  	};

}]);


kitchenSinkBackOfficeApp.controller('ListUserCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

	$scope.users = {};
	
	$http.get('http://localhost:1337/user').then(function successCallback(response) {

		$scope.users = response.data;

	}, function errorCallback(response) {

		$scope.error = response.data;

	});

	$scope.delete = function(userId) {

		$http.post('http://localhost:1337/user/destroy?id=' + userId).then(function successCallback(response) {
			alert("Eliminación exitosa");
			$route.reload();
		}, function errorCallback(response) {
			alert("Algo pasó >;O");
		});
	};

}]);