function Home(productIndex, categoryTabs) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.message = 'Welcome to the home page!';
  ctrl.allProducts = productIndex.data;
  ctrl.categories = categoryTabs.data;

}

angular
  .module('app')
  .controller('Home', Home);
