function ProductRatingFilter() {
  return function(ratings) {

    var points = 0;
    var votes = 0;

    for(var i in ratings) {
      var rating = ratings[i];
      if(rating.rating_id === null && rating.score !== undefined) {
        points += rating.score;
        votes++;
      };
    };

    var average = points/votes;

    if (average >= 0) {
      return Math.floor(average);
    }else{
      return undefined;
    };
  };
};

angular
  .module('app')
  .filter('productRatingFilter', ProductRatingFilter);
