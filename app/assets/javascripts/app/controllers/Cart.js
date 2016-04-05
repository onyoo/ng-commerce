function Cart(cartIndex, CartService) {
  var ctrl = this;

  ctrl.carts = cartIndex.data;

  ctrl.checkout = function(id) {
    ctrl.cOMessage = true;
    var index = -1;
    for (i=0; i < ctrl.carts.length; i++) {
      if( ctrl.carts[i].id ==  id ){
        index = i;
        break;
      };
    };
    ctrl.carts = ctrl.carts.splice(index,1);
    CartService.checkout(id);
  };

  ctrl.newCart = function() {
    CartService.newCart().success(function(resp) {
      ctrl.carts.push(resp);
    });
  };

  ctrl.deleteCart = function(id) {
    CartService.deleteCart(id).success(function(resp_id) {
      var index = -1;
      for (i=0; i < ctrl.carts.length; i++) {
        if( ctrl.carts[i].id == resp_id ){
          index = i;
          break;
        };
      };
      ctrl.carts.splice(index,1);
      ctrl.carts;
    });
  };

};

angular
  .module('app')
  .controller('Cart', Cart);
