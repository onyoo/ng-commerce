function Product(productShow, productRatings, ProductService) {
  var ctrl = this;

  ctrl.product = productShow.data;
  ctrl.ratings = productRatings.data;

  ctrl.submitReview = function(id, review, rating) {
    ProductService.submitReview(id, review, rating).then(function(resp) {
      ctrl.ratings.push(resp.data);
    });
  };

}

angular
  .module('app')
  .controller('Product', Product)
