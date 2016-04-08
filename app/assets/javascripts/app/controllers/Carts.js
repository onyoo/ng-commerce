function Carts(cartIndex, CartService) {
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


  ctrl.deleteCart = function(id) {
    CartService.deleteCart(id).then(function(resp_id) {
      var index = -1;
      for (i=0; i < ctrl.carts.length; i++) {
        if( ctrl.carts[i].id == resp_id.data ){
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
  .controller('Carts', Carts);
