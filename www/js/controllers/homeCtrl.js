(function(){

  'use strict';

  function HomeCtrl(Users, Developers){

    var vm = this;
    var chota = JSON.parse(window.localStorage.getItem('user'));
    Users.get(chota.user_id).then(function(res){
      console.log(res);
      vm.user_data = res.data;
    }, function(err){
      console.log(err);
    });

    Developers.get(Users.Data.user_id).then(function(res){
      vm.projects = res.data;
    }, function(err){
      console.log(err);
    });
  }

  angular.module('developers_inbricks.controllers')
        .controller('HomeCtrl', HomeCtrl);
})();
