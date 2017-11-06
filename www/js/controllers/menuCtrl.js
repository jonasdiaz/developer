(function(){

  'use strict';

  function MenuCtrl(Users, $state, $location){
    var vm = this;

    vm.cerrar_sesion = function(){
      Users.logout().then(function(res){
        $state.go('login');
      }, function(err){
        console.log(err);
      });
    };

    vm.perfil = function(){
      $state.go('app.perfil');
    };
  }

  angular.module('developers_inbricks.controllers')
        .controller('MenuCtrl', MenuCtrl);
})();
