function CartService($http, $cookies) {

  this.getCarts = function() {
    //need to find user by id not name
    return $http.get('/carts/' + $cookies.get('user_name'));
  };

  this.getContents = function(id) {
    return $http.get('/carts/' + id);
  };

  this.addToCart = function(id) {
    //need to find user by id not name
    $http.patch('/carts/' + $cookies.get('user_name'), {product_id: id});
  };

  this.changeQuant = function(id, quantity) {
    $http.patch('/carts/' + $cookies.get('user_name'), {'product_id': id, 'quantity': quantity})
  };

};

angular
  .module('app')
  .service('CartService', CartService);
