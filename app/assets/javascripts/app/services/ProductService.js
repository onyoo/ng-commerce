function ProductService($http) {
  this.getProductsIndex = function() {
    return $http.get('/products');
  };

}

angular
  .module('app')
  .service('ProductService', ProductService);
