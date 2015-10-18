'use strict';

/**
 * @ngdoc overview
 * @name bueleApp
 * @description
 * # bueleApp
 *
 * Main module of the application.
 */
angular
  .module('bueleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).controller('AppCtrl',[ '$scope', '$location', function ($scope,$location){
    $scope.isActive = function (route) {
        return (route == $location.path().split('/')[1] ) ? 'active' : '';
    };
  }]);
