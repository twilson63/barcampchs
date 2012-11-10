app.factory('Session', function($resource){
  var Session = $resource('https://api.mongolab.com/api/1/databases' +
      '/barcampchs/collections/sessions/:id',
      { apiKey: '509dc05ee4b0f39955c326e4' }, {
        update: { method: 'PUT' }
      }
  );
  // var Session = $resource('https://localhost:27017' +
  //     '/barcampchs/collections/sessions/:id',
  //     { }, {
  //       update: { method: 'PUT' }
  //     }
  // );

  Session.prototype.update = function(cb) {
    return Session.update({id: this._id.$oid},
        angular.extend({}, this, {_id:undefined}), cb);
  };

  Session.prototype.destroy = function(cb) {
    return Session.remove({id: this._id.$oid}, cb);
  };
  
  Session.prototype.vote = function(cb) {
    cb(null);
  }

  return Session;  
});