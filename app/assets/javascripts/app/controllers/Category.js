function Category(categoryShow, categoryProducts) {
  this.category = categoryShow.data;
  this.products = categoryProducts.data;
};

angular
  .module('app')
  .controller('Category', Category);
