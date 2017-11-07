(function(){

  'use strict';

  function PerfilCtrl(Users, Developers){

    var vm = this;
    var amigo = JSON.parse(window.localStorage.getItem('user'));
    Users.get(amigo.user_id).then(function(res){
      console.log(res);
      vm.user_data = res.data;
    }, function(err){
      console.log(err);
    });

    vm.editar_perfil = function(){
      console.log('Hola Ura');
      console.log(vm.user_data);
      Developers.update(amigo.user_id, vm.user_data).then(function(res){
        console.log(res);
      }, function(err){
        console.log(err);
      });
    };
  }

  angular.module('developers_inbricks.controllers')
        .controller('PerfilCtrl', PerfilCtrl);
})();
