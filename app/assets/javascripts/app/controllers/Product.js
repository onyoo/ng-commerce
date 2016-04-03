function Product(productShow) {
  var ctrl = this;

  ctrl.product = productShow.data;
}

angular
  .module('app')
  .controller('Product', Product)
