app.controller('Vote', function($scope, $routeParams, Session, $location) {
  var self = this;

  Session.get({id: $routeParams.id}, function(session) {
    self.original = session;
    $scope.session = new Session(self.original);
  });

  $scope.vote = function() {
    $scope.session.voters.push($scope.user);
    console.log($scope.session);
    $scope.session.update(user, function() {
      $location.path('/');
    });
  }
});