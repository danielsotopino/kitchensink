kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp');

kitchenSinkBackOfficeApp.controller('BeaconCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  	$scope.beaconForm = {};

	$scope.saveBeacon = function() {
		
  		$http.post('http://localhost:1337/beacon/create', $scope.beaconForm).then(function(response) {
			$scope.form.$setPristine();
			$scope.form.$setUntouched();
			$scope.beaconForm = {};
			$scope.success = 'Registro exitoso !';

		}, function(response) {

		    $scope.success = response;

		});

  	};

}]);

kitchenSinkBackOfficeApp.controller('ListBeaconCtrl', ['$scope', '$route', '$http', function($scope, $route, $http) {
	$scope.beacons = {};
	
	$http.get('http://localhost:1337/beacon').then(function successCallback(response) {

		$scope.beacons = response.data;

	}, function errorCallback(response) {

		$scope.error = response.data;

	});

	$scope.delete = function(beaconId) {

		$http.post('http://localhost:1337/beacon/destroy?id=' + beaconId).then(function successCallback(response) {
			alert("Eliminación exitosa");
			$route.reload();
		}, function errorCallback(response) {
			alert("Algo pasó >;O");
		});
	};

}]);