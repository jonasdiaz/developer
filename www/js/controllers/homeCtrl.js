(function(){

  'use strict';

  function HomeCtrl(Users){

    var vm = this;
    var chota = JSON.parse(window.localStorage.getItem('user'));
    Users.get(chota.user_id).then(function(res){
      console.log(res);
      vm.user_data = res.data;
    }, function(err){
      console.log(err);
    });

    vm.projects = {
      items: []
    };
  }

  angular.module('developers_inbricks.controllers')
        .controller('HomeCtrl', HomeCtrl);
})();
