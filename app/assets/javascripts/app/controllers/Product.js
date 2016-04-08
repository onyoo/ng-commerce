function Product(productShow, productRatings, ProductService) {
  var ctrl = this;

  ctrl.product = productShow.data;
  ctrl.ratings = productRatings.data;

};

angular
  .module('app')
  .controller('Product', Product);
