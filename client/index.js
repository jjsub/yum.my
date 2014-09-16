(function(){
  'use strict';

  angular.module('yum.my', ['ngRoute','LocalForageModule'])
  .config(['$routeProvider','$httpProvider','$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .when('/bookmark', {templateUrl:'/views/bookmark/bookmark.html', controller:'BookmarkCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'yummy', storeName:'cache', version:1.0});
  }]);
})();
