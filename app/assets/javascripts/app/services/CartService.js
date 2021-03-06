function CartService($http, $cookies) {

  this.getContents = function(id) {
    return $http.get('/carts/' + id);
  };

  // this.addToCart = function(cart_id, product_id) {
  //   $http.patch('/carts/' + cart_id, {'product_id': product_id, 'quantity': 1, 'addToCart': true});
  // };

  this.changeQuant = function(cart_id, product_id, quantity) {
    return $http.patch('/carts/' + cart_id, {'product_id': product_id, 'quantity': quantity});
  };

  this.checkout = function(id) {
    return $http.patch('/checkout/' + id);
  };

  this.getCartIndex = function() {
    return $http.get('/users/' + $cookies.get('user_id'));
  };

  this.newCart = function() {
    return $http.post('/carts', {'user_id': $cookies.get('user_id')});
  };

  this.deleteCart = function(id) {
    return $http.delete('/carts/' + id);
  };

};

angular
  .module('app')
  .service('CartService', CartService);
