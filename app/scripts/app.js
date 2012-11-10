var app = angular.module('barcampchs', [])
  .config(function($routeProvider){
    $routeProvider
      .when('/', 
        { 
          controller: 'Index', 
          templateUrl: '/app/views/index.html' })
      .when('/new', 
        { 
          controller: 'AddSession', 
          templateUrl: '/app/views/session.html' })
      .when('/vote/:id', 
        { 
          controller: 'Vote', 
          templateUrl: '/app/views/vote.html' })
      .when('/edit/:id', 
        { 
          controller: 'EditSession', 
          templateUrl: '/app/views/session.html' })
      .otherwise({ redirectTo: '/'});
  });
  