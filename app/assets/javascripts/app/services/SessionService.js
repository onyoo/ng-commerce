function SessionService($http, $cookies) {

  this.submit_form = function(params) {
    return $http.post('/login', params)
  };

  this.logout = function() {
    $http.delete('/logout').success(function(resp) {
      $cookies.remove('user_name');
      $cookies.remove('user_id');
    });
  };
};

angular
  .module('app')
  .service('SessionService', SessionService);
