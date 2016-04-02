angular
  .module('app', ['ui.router', 'templates', 'ngCookies']) //'ngCookies' access coockies
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'Home as home',
        resolve: {
          productIndex: function (ProductService) {
            return ProductService.getProductsIndex();
          },
          categoryTabs: function (CategoryService) {
            return CategoryService.getCategories();
          }
        }
      })
      .state('category', {
        url: '/:name',
        templateUrl: 'app/views/category.html',
        controller: 'Category as category',
        resolve: {
          categoryShow: function(CategoryService, $stateParams) {
            return CategoryService.showCategory($stateParams.name);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
