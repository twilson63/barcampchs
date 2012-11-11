app.factory('Session', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('sessions');
});