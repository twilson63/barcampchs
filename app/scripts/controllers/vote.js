app.controller('Vote', function($scope, $routeParams, Session, $location) {
  Session.get($routeParams.id, function(err, session){
    $scope.session = session;
  });
  $scope.vote = function() {
    Session.vote($scope.session, $scope.user);
    $location.path('/');
  }
});