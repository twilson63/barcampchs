app.controller('AddSession', function($scope, Session, $location) {
  $scope.addSession = function() {
    Session.add($scope.session);
    $location.path('/');
  }
});