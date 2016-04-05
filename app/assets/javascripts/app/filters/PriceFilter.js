function PriceFilter() {
  return function(items, range) {
    var min = range[0];
    var max = range[1];

    var itemsInRange = [];

    for( var i in items ) {
      if( min < items[i].price < max ) {
        itemsInRange.push(items[i]);
      };
    };

    return itemsInRange;
  }
}

angular
  .module('app')
  .filter('priceFilter', PriceFilter)
