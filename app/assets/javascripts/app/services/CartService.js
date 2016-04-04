function CartService($http, $cookies) {

  this.getCarts = function() {
    return $http.get('/carts/' + $cookies.get('user_name'));
  };

  this.getContents = function(id) {
    return $http.get('/carts/' + id)
  }

};

angular
  .module('app')
  .service('CartService', CartService);
