app.controller('AddSession', function($scope, Session, $location) {
  $scope.buttonName = 'Create';
  $scope.save = function() {
    $scope.session.voters = ['creator'];
    var session = new Session($scope.session);
    session.$save(function(session) { $location.path('/'); });
  }
});