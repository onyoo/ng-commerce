function ProductService($http) {
  this.getProductsIndex = function() {
    return $http.get('/products');
  };

  this.categoryProducts = function(name) {
    return $http.get('/products/' + name);
  };

  this.getProduct = function(id) {
    return $http.get('/products/' + id)
  };

};

angular
  .module('app')
  .service('ProductService', ProductService);
