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

      for(var i = 0; i < ctrl.lineItems.length; i++){
        var product = ctrl.lineItems[i];
        total += product.price;
      };
      return total;
    };

    ctrl.changeQuant = function(cartId, productId) {
      showQuantForm = false;
      CartService.changeQuant(cartId, productId, this.quantity).success(function(lineItems) {
        ctrl.lineItems = lineItems;
      });
      ctrl.quantity = undefined;
    };


    CartService
      .getContents(this.id)
      .then(function(resp) {
        ctrl.lineItems = resp.data;
        for( var i = 0; i < ctrl.lineItems.length; i++){
          ctrl.cartTotal.push(ctrl.lineItems[i].price);
        };
      });

  },
  controllerAs: 'cart'
};

angular
  .module('app')
  .component('cart', Cart);
