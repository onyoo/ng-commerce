function CategoryService($http) {

  this.getCategories = function() {
    return $http.get('/categories');
  };

  this.showCategory = function(name) {
    return $http.get('/categories/' + name);
  };
};

angular
  .module('app')
  .service('CategoryService', CategoryService);
