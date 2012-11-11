app.controller('Vote', function($scope, $routeParams, Session, User, $location) {
  var self = this;
  var addUser = function(data, cb) {
    var user = new User(data);
    user.$save(cb);
  };

  var addVote = function() {
    $scope.session.voters.push($scope.user);
    $scope.session.$update(function() {
      $location.path('/');
    });
  };

  Session.getById($routeParams.id, function(session) {
    self.original = session;
    $scope.session = new Session(self.original);
  });

  $scope.vote = function() {
    User.query({ name: $scope.user }, function(users) {
      if (users.length < 1) {
        addUser({name: $scope.user}, addVote);
      } else {
        $scope.message = "I am sorry you have already voted!";
      }
    });
  }
});