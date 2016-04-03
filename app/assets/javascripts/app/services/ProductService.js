function ProductService($http) {
  this.getProductsIndex = function() {
    return $http.get('/products');
  };

  this.categoryProducts = function(name) {
    return $http.get('/products/' + name);
  };

};

angular
  .module('app')
  .service('ProductService', ProductService);
