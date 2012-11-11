app.controller('Index', function($scope, Session) {
  Session.all(function(sessions){
    $scope.sessions = sessions;
  });
});