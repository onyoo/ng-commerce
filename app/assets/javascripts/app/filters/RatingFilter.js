function RatingFilter() {
  return function(ratings) {

    filteredRatings = {};
    // comments keys are the rating_id
    comments = {};

    for (var i in ratings) {
      var opinion = ratings[i];

      if (opinion.rating_id === null) {
        // it's a rating
        filteredRatings[opinion.id] = opinion;
      }else{
        // has no comments
        if(filteredRatings[opinion.rating_id].comments === undefined) {
          filteredRatings[opinion.rating_id].comments = {};
        };
        // adds unique comments
        if(filteredRatings[opinion.rating_id].comments[opinion.id] === undefined) {
          filteredRatings[opinion.rating_id].comments[opinion.id] = opinion;
        };
      };
    };
    return filteredRatings;
  };
};

angular
  .module('app')
  .filter('ratingFilter', RatingFilter);
