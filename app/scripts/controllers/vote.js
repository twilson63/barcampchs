app.controller('Vote', function($scope, $routeParams, Session, $location) {
  console.log($routeParams.id);
  Session.get($routeParams.id, function(err, session){
    console.log(session);
    $scope.session = session;
  });
  $scope.vote = function() {
    Session.vote($scope.session, $scope.user);
    $location.path('/');
  }
});