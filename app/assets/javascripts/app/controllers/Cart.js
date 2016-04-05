function Cart(cartIndex, CartService) {
  var ctrl = this;

  ctrl.carts = cartIndex.data;

  ctrl.checkout = function(id) {
    CartService.checkout(id);
  };

  ctrl.newCart = function() {
    CartService.newCart().success(function(resp) {
      ctrl.carts.push(resp);
    });
  }

};

angular
  .module('app')
  .controller('Cart', Cart);
