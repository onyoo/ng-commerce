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

        for(var i = 0; i < ctrl.data.length; i++){
            var product = ctrl.data[i];
            total += product.price;
        };
        return total;
    };

    ctrl.changeQuant = function(cartId, productId) {
      CartService.changeQuant(cartId, productId, this.quantity).success(function(cartItems) {
        ctrl.data = cartItems;
      });
    };


    CartService
      .getContents(this.id)
      .then(function(resp) {
        ctrl.data = resp.data;
        for( var i = 0; i < ctrl.data.length; i++){
          // ctrl.total += ctrl.data[i].price;
          ctrl.cartTotal.push(ctrl.data[i].price);
        };
      });

  },
  controllerAs: 'cartItem'
};

angular
  .module('app')
  .component('cartItem', CartItem);
