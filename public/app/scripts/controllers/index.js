app.controller('Index', function($scope, Session) {
  $scope.sessions = Session.query();
});