app.factory('Session', function(){
  var sessions = [];
  return {
    all: sessions,
    add: function(session) {
      session.id = sessions.length + 1;
      session.voters = ['creator'];
      sessions.push(session);
    }
  }
})