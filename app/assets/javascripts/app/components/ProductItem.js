var ProductItem = {
  templateUrl: 'app/views/product_item.html',
  bindings: {
    product: '='
  },
  controller: function(CartService) {
    var ctrl = this;

    ctrl.addToCart = function(product_id) {
      CartService.changeQuant(ctrl.activeCart.id, product_id, 1);
      this.product.inventory -= 1;
    };

    ctrl.getCartIndex = function() {
      ctrl.askCart = true;
      CartService.getCartIndex().then(function(index) {
        ctrl.carts = index.data;
      });
    };

    ctrl.setActiveCart = function(cartId) {
      for(i = 0; i < ctrl.carts.length; i++) {
        if(ctrl.carts[i].id == cartId) {
          ctrl.activeCart = ctrl.carts[i];
          break;
        };
      };
      ctrl.active = undefined;
      ctrl.askCart = false;
      ctrl.addToCart(ctrl.product.id)
    };

  },
  controllerAs: 'product'
};

angular
  .module('app')
  .component('productItem', ProductItem);
