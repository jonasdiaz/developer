(function(){

  'use strict';

  function run($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }

  function config($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl',
      controllerAs: 'menu'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })

    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'SigninCtrl',
      controllerAs: 'signin'
    })

    .state('notify', {
      url: '/notify',
      templateUrl: 'templates/notificaciones.html',
      controller: 'NotifyCtrl',
      controllerAs: 'notify'
    })

    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl',
          controllerAs: 'perfil'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl',
          controllerAs: 'home'
        }
      }
    })
    .state('app.update', {
      url: '/update',
      views: {
        'menuContent': {
          templateUrl: "templates/update.html"
        }
      }
    });

    $urlRouterProvider.otherwise('/app/home');
  }

  angular
        .module('developers_inbricks', ['ionic',
          'developers_inbricks.controllers', 'developers_inbricks.services'])
        .config(config)
        .run(run);
})();
