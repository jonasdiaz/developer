(function(){

  'use strict';

  function NotifyCtrl(Users, Developers){
    var vm = this;

    Developers.getMensajes(Users.Data.id).then(function(res){
      console.log(res);
      vm.mensajes = res.data;
    }, function(err){
      console.log(err);
    });

    //vm.items = [];
  }

  angular
        .module('developers_inbricks.controllers')
        .controller('NotifyCtrl', NotifyCtrl);
})();
