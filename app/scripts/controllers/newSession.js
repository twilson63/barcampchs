app.controller('AddSession', function($scope, Session, $location) {
  $scope.buttonName = 'Create';
  $scope.save = function() {
    $scope.session.voters = ['creator'];
    console.log($scope.session);
    Session.save($scope.session, function(session){
      $location.path('/');
    });
  }
});