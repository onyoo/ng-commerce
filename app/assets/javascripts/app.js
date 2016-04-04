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
      .state('home.index', {
        url: 'index',
        templateUrl: 'app/views/index.html',
        controller: 'Home as home',
        resolve: {
          productIndex: function (ProductService) {
            return ProductService.getProductsIndex();
          }
        }
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'app/views/login_form.html',
        controller: 'Home as home'
      })
      .state('home.cart', {
        url: 'cart',
        templateUrl: 'app/views/carts.html',
        controller: 'Cart as cart',
        resolve: {
          cartIndex: function(CartService) {
            return CartService.getCarts();
          }
          //this should be put in a component to be fired on each item.
          // cartContents: function(CartService) {
          //   return CartService.getContents();
          // }
        }
      })
      .state('home.category', {
        url: 'category/:name',
        templateUrl: 'app/views/category.html',
        controller: 'Category as category',
        resolve: {
          categoryShow: function(CategoryService, $stateParams) {
            return CategoryService.showCategory($stateParams.name);
          },
          categoryProducts: function(ProductService, $stateParams) {
            return ProductService.categoryProducts($stateParams.name);
          }
        }
      })
      .state('home.product', {
        url: 'product/:id',
        templateUrl: 'app/views/product.html',
        controller: 'Product as product',
        resolve: {
          productShow: function(ProductService, $stateParams) {
            return ProductService.getProduct($stateParams.id)
          },
          productRatings: function(RatingService, $stateParams) {
            return RatingService.getRatings($stateParams.id)
          }
        }
      });
    $urlRouterProvider.otherwise('/index');
  });
