var app = angular.module('barcampchs', ['mongolabResourceHttp'])
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
app.constant('MONGOLAB_CONFIG',{API_KEY:'509dc05ee4b0f39955c326e4', DB_NAME:'barcampchs'});