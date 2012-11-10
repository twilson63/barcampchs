app.controller('EditSession', function($scope, $routeParams, Session, $location) {
  Session.get($routeParams.id, function(err, session){
    $scope.session = session;
  });
  $scope.save = function() {
    Session.save($routeParams.id, $scope.session, function(err){
      $location.path('/');
    });
  }
});