function Cart(cartIndex, CartService) {
  var ctrl = this;

  ctrl.carts = cartIndex.data;

  ctrl.checkout = function(id) {
      CartService.checkout(id);
  };

};

angular
  .module('app')
  .controller('Cart', Cart);
