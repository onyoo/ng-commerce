function Home(productIndex, categoryTabs, SessionService, $cookies, $scope, $state) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.user = $cookies.get('user_name')

  ctrl.message = 'Welcome ' + (ctrl.user || 'guest');
  ctrl.allProducts = productIndex.data;
  ctrl.categories = categoryTabs.data;
  ctrl.email = '';
  ctrl.password = '';


  ctrl.submit_login_form = function() {
    debugger;
    var credentials = {
      'email': ctrl.email,
      'password': ctrl.password
    };
    SessionService.submit_form(credentials);
    $state.go('home.index');
  };

  ctrl.logout = function() {
    return SessionService.logout()
  };
}

angular
  .module('app')
  .controller('Home', Home);
