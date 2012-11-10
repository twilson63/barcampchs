app.factory('Session', function(){
  var sessions = [];
  return {
    all: sessions,
    add: function(session) {
      session.id = sessions.length + 1;
      session.voters = ['creator'];
      sessions.push(session);
    },
    vote: function(session, user) {
      if(session.voters.indexOf(user) < 0) {
        session.voters.push(user);
      }
    },
    get: function(id, cb) {
      for(var i = 0; i < sessions.length; i++) {
        console.log(sessions[i].id);
        cb(null, sessions[i] );
      }
    }
  }
});