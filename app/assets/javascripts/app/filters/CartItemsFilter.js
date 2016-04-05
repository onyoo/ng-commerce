function CartItemsFilter() {
  return function(items) {

    var unique = {};
    var distinct = [];

    for( var i in items ){
      if( typeof(unique[items[i].id]) == "undefined"){
        items[i]['quantity'] = 1;
        distinct.push(items[i]);
      }else{


        var index = -1;
        for(var o = 0, len = distinct.length; o < len; o++) {
          if (distinct[o].id === items[i].id) {
            index = o;
            break;
          }
        }


        last = distinct[index]
        last['quantity']++
      }
      unique[items[i].id] = 0;
    }

    return distinct;
  };
};

angular
  .module('app')
  .filter('cartItemsFilter', CartItemsFilter);
