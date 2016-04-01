function Home() {
  this.message='Welcome to the home page!'

}

angular
  .module('app')
  .controller('Home', Home);
