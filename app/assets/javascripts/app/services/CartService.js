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

  this.changeQuant = function(cart_id, product_id, quantity) {
    return $http.patch('/carts/' + $cookies.get('user_name'), {'cart_id': cart_id, 'product_id': product_id, 'quantity': quantity});
  };

};

angular
  .module('app')
  .service('CartService', CartService);
