'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('LoginCtrl', function ($location, ArtistService) {
    var vm = this;
    vm.login = login;
    vm.artist = {
      username:"",
      password : ""
    };


    function login(){
      ArtistService
        .login(vm.artist.username, vm.artist.password)
        .then(
          function(response){
            var artist = response;
            console.log(artist);
            if(artist){
              $location.url("/artist/"+ artist._id);
            }
          },
          function(error) {
            vm.error = error;
          }
        );
    }
  });
