function Home(productIndex, $scope) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.message = 'Welcome to the home page!';
  ctrl.allProducts = productIndex.data;

}

angular
  .module('app')
  .controller('Home', Home);
