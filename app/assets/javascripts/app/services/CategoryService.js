function CategoryService($http) {

  this.getCategories = function() {
    return $http.get('/categories');
  }
};

angular
  .module('app')
  .service('CategoryService', CategoryService)
