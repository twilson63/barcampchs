var app = angular.module('barcampchs', [])
  .config(function($routeProvider){
    $routeProvider
      .when('/', { controller: 'Index', templateUrl: '/app/views/index.html' });
  });
  