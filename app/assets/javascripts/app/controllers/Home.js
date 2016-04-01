function Home(productIndex) {
  var ctrl = this;

  ctrl.message = 'Welcome to the home page!';
  ctrl.allProducts = productIndex.data;
}

angular
  .module('app')
  .controller('Home', Home);
