app.controller('AddSession', function($scope, Session, $location) {
  $scope.save = function() {
    Session.add($scope.session);
    $location.path('/');
  }
});