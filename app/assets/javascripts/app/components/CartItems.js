var CartItem = {
  templateUrl: 'app/views/cart_item.html',
  bindings: {
    id: '='
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
  controllerAs: 'cartItem'
};

angular
  .module('app')
  .component('cartItem', CartItem);
