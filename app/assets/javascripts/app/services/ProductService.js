function ProductService($http) {
  this.getProductsIndex = function() {
    return $http.get('/products');
  };

  this.categoryProducts = function(name) {
    return $http.get('/products/' + name);
  };

  this.getProduct = function(id) {
    return $http.get('/products/' + id);
  };

  this.submitReview = function(id, review, rating) {
    return $http.patch('/products/' + id, {'review': review, 'rating': rating});
  };

};

angular
  .module('app')
  .service('ProductService', ProductService);
