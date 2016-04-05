function CartItemsFilter() {
  return function(items) {

    var unique = {};
    var distinct = [];

    for( var i in items ){
      if( typeof(unique[items[i].id]) == "undefined"){
        items[i]['quantity'] = 1;
        distinct.push(items[i]);
      }else{
        last = distinct[distinct.length - 1]
        if(last.quantity == NaN){
          last['quantity'] = 1
        }else{
          last['quantity']++
        }
        // unique[items[i].id] += 1;
      }
      unique[items[i].id] = 0;
    }

    return distinct;
  };
};

angular
  .module('app')
  .filter('cartItemsFilter', CartItemsFilter);
