(function(){

  'use strict';

  function SigninCtrl(Developers) {

    var vm = this;
    vm.data = {};

    vm.grabar = function(){
      console.log(vm.data);
      vm.data.nombre = 'Mahoma';
      Developers.save(vm.data).then(function(res){
        console.log(res);
      }, function(err){

      });
    };
  }

  angular
        .module('developers_inbricks.controllers')
        .controller('SigninCtrl', SigninCtrl);
})();
