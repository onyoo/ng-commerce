function RatingService($http) {

  this.getRatings = function(id) {
    return $http.get('/ratings/' + id)
  };

};

angular
  .module('app')
  .service('RatingService', RatingService);
