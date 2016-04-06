function CartItemsFilter() {
  return function(items) {

    var unique = {};
    var distinct = [];

    for( var i in items ){
      // checks if item has already been seen in cart
      // if not, pushes item to distinct array
      if( typeof(unique[items[i].id]) == "undefined"){
        items[i]['quantity'] = 1;
        distinct.push(items[i]);
      }else{
        // finds index of item in distinct arr
        var index = -1;
        for(var o = 0, len = distinct.length; o < len; o++) {
          if (distinct[o].id === items[i].id) {
            index = o;
            break;
          };
        };
        // increments quantity attribute of item
        last = distinct[index];
        last['quantity']++;
      };
      // sets attr in unique with product id so next time through
      // it will increment quantity if not done so this time
      unique[items[i].id] = 0;
    };

    return distinct;
  };
};

angular
  .module('app')
  .filter('cartItemsFilter', CartItemsFilter);
