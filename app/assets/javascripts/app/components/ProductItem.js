var ProductItem = {
  template: [
      '<li>',
        '<a class="product" ui-sref="home.product({id: product.product.id})">{{product.product.name}}</a>',
        '<p>Price: {{ product.product.price }} </p>',
        '<p>Only: {{ product.product.inventory }} left! </p>',
      '</li>'
  ].join(''),
  bindings: {
    product: '='
  },
  controllerAs: 'product'
}

angular
  .module('app')
  .component('productItem', ProductItem);
