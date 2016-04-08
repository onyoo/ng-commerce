var Review = {
  templateUrl: 'app/views/review.html',
  bindings: {
    product: '=',
    r: '='
  },
  controller: function(ProductService) {
    var ctrl = this;

    ctrl.submitReview = function(id, review, rating) {
      ProductService.submitReview(id, review, rating, ctrl.r).then(function(resp) {
        ctrl.product.ratings.push(resp.data);
      });
    };

  },
  controllerAs: 'review'

};

angular
  .module('app')
  .component('review', Review);
