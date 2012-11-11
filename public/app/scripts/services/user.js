app.factory('User', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('users');
});