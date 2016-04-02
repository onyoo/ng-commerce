function Category(categoryShow) {
  this.category = categoryShow.data;
};

angular
  .module('app')
  .controller('Category', Category);
