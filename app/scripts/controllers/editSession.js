app.controller('EditSession', function($scope, $routeParams, Session, $location) {
  var self = this;
  $scope.buttonName = 'Update';
  Session.get({id: $routeParams.id}, function(session) {
    console.log(session);
    self.original = session;
    $scope.session = new Session(self.original);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.session);
  }

  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/');
    });
  };

  $scope.save = function() {
    $scope.session.update(function() {
      $location.path('/');
    });
  };
});