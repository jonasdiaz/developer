(function(){

  'use strict';

  function LoginCtrl(User){

    var vm = this;

    vm.data = {};

    vm.login = function(){
      User.login(vm.data).then(function(res){
        console.log(res);
      }, function(err){

      });
    };
  }

  angular
        .module('developers_inbricks.controllers')
        .controller('LoginCtrl', LoginCtrl);
})();
