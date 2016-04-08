var Cart = {
  templateUrl: 'app/views/cart.html',
  bindings: {
    id: '=',
    finished: '='
  },
  controller: function(CartService) {
    var ctrl = this;

    ctrl.cartTotal = [].map(function(a) {return a.quantity});

    ctrl.getTotal = function(){
      var total = 0;

      for(var i = 0; i < ctrl.cartItems.length; i++){
        var product = ctrl.cartItems[i];
        total += product.price;
      };
      return total;
    };

    ctrl.changeQuant = function(cartId, productId) {
      showQuantForm = false;
      CartService.changeQuant(cartId, productId, this.quantity).success(function(cartItems) {
        ctrl.cartItems = cartItems;
      });
      ctrl.quantity = undefined;
    };


    CartService
      .getContents(this.id)
      .then(function(resp) {
        ctrl.cartItems = resp.data;
        for( var i = 0; i < ctrl.cartItems.length; i++){
          ctrl.cartTotal.push(ctrl.cartItems[i].price);
        };
      });

  },
  controllerAs: 'cart'
};

angular
  .module('app')
  .component('cart', Cart);
