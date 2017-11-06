(function(){

  'use strict';

  function PerfilCtrl(Users){

    var vm = this;
    var amigo = JSON.parse(window.localStorage.getItem('user'));
    Users.get(amigo.user_id).then(function(res){
      console.log(res);
      vm.user_data = res.data;
    }, function(err){
      console.log(err);
    });
  }

  angular.module('developers_inbricks.controllers')
        .controller('PerfilCtrl', PerfilCtrl);
})();
