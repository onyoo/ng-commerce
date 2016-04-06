function Home(productIndex, categoryTabs, SessionService, $cookies, $scope, $state) {
  var ctrl = this;

  ctrl.search = '';
  ctrl.user = $cookies.get('user_name');


  ctrl.allProducts = productIndex.data;
  ctrl.categories = categoryTabs.data;
  ctrl.email = '';
  ctrl.password = '';


  ctrl.submit_login_form = function() {
    var credentials = {
      'email': ctrl.email,
      'password': ctrl.password
    };
    SessionService.submit_form(credentials).success(function(user) {
      $cookies.put('user_name', user.name);
      $cookies.put('user_id', user.id);

      ctrl.user = user.name
      $state.go('home.index', {}, {reload: true}) // reloads controller to reset XSRF-TOKEN needed for next log-in
    });
  };

  ctrl.logout = function() {
    ctrl.user = undefined;
    return SessionService.logout();
  };

  ctrl.setActiveTab = function(category) {
    ctrl.activeMenu = category;
  };

  ctrl.clearActiveTab = function() {
    ctrl.activeMenu = '';
  }
}

angular
  .module('app')
  .controller('Home', Home);
