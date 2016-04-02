function SessionService($http, $cookies) {

  this.submit_form = function(params) {
    $http.post('/login', params).success(function(user) {
      $cookies.put('user_name', user.name)
    });
  }

  this.logout = function() {
    $http.delete('/logout');
    $cookies.remove('user_name');
  }
};

angular
  .module('app')
  .service('SessionService', SessionService);
