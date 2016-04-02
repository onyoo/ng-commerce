function Home(productIndex, categoryTabs, SessionService, $cookies) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.message = 'Welcome to the home page!';
  ctrl.allProducts = productIndex.data;
  ctrl.categories = categoryTabs.data;
  ctrl.email = '';
  ctrl.password = '';
  ctrl.user = $cookies.get('user_name')

  ctrl.submit_login_form = function() {
    var credentials = {
      'email': ctrl.email,
      'password': ctrl.password
    };
    SessionService.submit_form(credentials);
  };

  ctrl.logout = function() {
    return SessionService.logout()
  };
}

angular
  .module('app')
  .controller('Home', Home);
