function CartService($http, $cookies) {

  this.getCarts = function() {
    return $http.get('/carts/' + $cookies.get('user_name'));
  };

  this.getContents = function(id) {
    return $http.get('/carts/' + id)
  }

  this.addToCart = function(id) {
    $http.patch('/carts/' + $cookies.get('user_name'), {product_id: id})
  }

};

angular
  .module('app')
  .service('CartService', CartService);
