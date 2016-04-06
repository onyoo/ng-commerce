var NewCart = {
  template: "<button ng-click='newCart.newCart()' ng-show='!cart.cOMessage'>New Cart</button>",
  bindings: {
    controller: '='
  },
  controller: function(CartService) {
    var ctrl = this;

    ctrl.newCart = function() {
      CartService.newCart().success(function(resp) {
        ctrl.controller.carts.push(resp);
      });
    };

  },
  controllerAs: 'newCart'
};

angular
  .module('app')
  .component('newCart', NewCart);
