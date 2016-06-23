'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
var app = angular.module('webApp', [
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/artistModule', {
        templateUrl: 'views/artistmodule.html',
        controller: 'ArtistmoduleCtrl',
        controllerAs: 'artistModule'
      })
      .when('/portfolioModule', {
        templateUrl: 'views/portfoliomodule.html',
        controller: 'PortfoliomoduleCtrl',
        controllerAs: 'portfolioModule'
      })
      .when('/blogModule', {
        templateUrl: 'views/blogmodule.html',
        controller: 'BlogmoduleCtrl',
        controllerAs: 'blogModule'
      })
      .when('/artList', {
        templateUrl: 'views/artlist.html',
        controller: 'ArtlistCtrl',
        controllerAs: 'artList'
      })
      .when('/uploadArt', {
        templateUrl: 'views/uploadart.html',
        controller: 'UploadartCtrl',
        controllerAs: 'uploadArt'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/artist/:id', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'artist'
      })

      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('SERVER',{
    url: "http://localhost:3000"
  });

