function Cart(cartIndex) {
  var ctrl = this;

  ctrl.carts = cartIndex.data;
};

angular
  .module('app')
  .controller('Cart', Cart);
