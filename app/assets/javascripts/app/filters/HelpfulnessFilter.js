function HelpfulnessFilter() {
  return function(comments) {

    var points = 0;
    var votes = 0;

    for (var i in comments) {
      var comment = comments[i];
      if (comment.score !== undefined){
        points += comment.score;
        votes++;
      };
    };

    var average = points/votes;

    if (average >= 0) {
      return Math.floor(average) + " | out of " + votes + " votes";
    }else{
      return undefined;
    };
  };
};

angular
  .module('app')
  .filter('helpfulnessFilter', HelpfulnessFilter);
