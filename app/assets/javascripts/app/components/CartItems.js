var CartItem = {
  templateUrl: 'app/views/cart_item.html',
  bindings: {
    id: '='
  },
  controller: function(CartService) {
    var ctrl = this;

    CartService
      .getContents(this.id)
      .then(function(resp) {
        ctrl.data = resp.data;
      });
  },
  controllerAs: 'cartItem'
};

angular
  .module('app')
  .component('cartItem', CartItem);
