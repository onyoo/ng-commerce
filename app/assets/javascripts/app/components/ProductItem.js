var ProductItem = {
  template: [
      '<li>',
        '<a class="product" ui-sref="home.product({id: product.product.id})">{{product.product.name}}</a>',
        '<button id="add_cart" ng-click="product.addToCart(product.product.id)">Add To Cart</button>',
        '<p>Price: {{ product.product.price }} </p>',
        '<p>Only: {{ product.product.inventory }} left! </p>',
      '</li>'
  ].join(''),
  bindings: {
    product: '='
  },
  controller: function(CartService) {
    this.addToCart = function(id) {
      CartService.addToCart(id);
      this.product.inventory -= 1;
    };
  },
  controllerAs: 'product'
};

angular
  .module('app')
  .component('productItem', ProductItem);
