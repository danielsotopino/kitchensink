'use strict';

var kitchenSinkBackOfficeApp = angular.module('kitchenSinkBackOfficeApp', ['ngRoute', 'ui.bootstrap']);

kitchenSinkBackOfficeApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.when('/addUser', {
      templateUrl: '/templates/addUser.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
    $routeProvider.when('/listUsers', {
      templateUrl: '/templates/listUsers.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
    $routeProvider.when('/login', {
      templateUrl: '/templates/login.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
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
    }),
    $routeProvider.when('/listProducts', {
      templateUrl: '/templates/listProducts.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
    $routeProvider.when('/addBeacon', {
      templateUrl: '/templates/addBeacon.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    }),
    $routeProvider.when('/listBeacons', {
      templateUrl: '/templates/listBeacons.html',
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })

}]);