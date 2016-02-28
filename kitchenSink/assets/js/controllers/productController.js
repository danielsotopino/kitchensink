kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp');

kitchenSinkBackOfficeApp.controller('ProductCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  	$scope.productForm = {};

	$scope.saveProduct = function() {
		
  		$http.post('http://localhost:1337/product/create', $scope.productForm).then(function(response) {
			$scope.form.$setPristine();
			$scope.form.$setUntouched();
			$scope.productForm = {};
			$scope.success = 'Registro exitoso !';
		}, function(response) {
		    $scope.success = response;
		});
  	};

}]);

kitchenSinkBackOfficeApp.directive('validateLatLng', function() {
	var latLngRegexp = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			
				ctrl.$validators.validateLatLng = function(modelValue, viewValue) {
					if (ctrl.$isEmpty(modelValue)) {
						return true;
					}

					if (latLngRegexp.test(viewValue)) {
						return true;
					}

					return false;
				};
			
		}
	};
});
