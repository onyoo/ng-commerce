function Home(productIndex, categoryTabs, SessionService, $cookies, $scope, $state) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.user = $cookies.get('user_name')

  ctrl.message = 'Welcome ' + (ctrl.user || 'Guest');
  ctrl.allProducts = productIndex.data;
  ctrl.categories = categoryTabs.data;
  ctrl.email = '';
  ctrl.password = '';


  ctrl.submit_login_form = function() {
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

  ctrl.setActive = function(category) {
    ctrl.activeMenu = category;
  };

  ctrl.clearActive = function() {
    ctrl.activeMenu = '';
  }
}

angular
  .module('app')
  .controller('Home', Home);
