function ProductService($http, Upload) {
  this.getProductsIndex = function() {
    return $http.get('/products');
  };

  this.categoryProducts = function(name) {
    return $http.get('/products/' + name);
  };

  this.getProduct = function(id) {
    return $http.get('/products/' + id);
  };

  this.submitReview = function(id, review, rating, ratingId) {
    if(ratingId === undefined){
      var rId = null;
    }else{
      var rId = ratingId;
    }
    data = {
      'review': review,
      'rating': rating,
      'rating_id': rId
    };
    return $http.patch('/products/' + id, data);
  };

  this.uploadImage = function(image, invalid, id) {
    return Upload.upload({
            url: '/products/' + id,
            method: 'PATCH',
            data: { 'file': image }
        });
  };

};

angular
  .module('app')
  .service('ProductService', ProductService);
