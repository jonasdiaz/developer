(function(){

  'use strict';

  function LoginCtrl($state, Users){

    var vm = this;

    vm.data = {};

    vm.login = function(){
      Users.login(vm.data).then(function(res){
        console.log(res);
        window.localStorage.setItem('user', JSON.stringify(res.data));
        window.localStorage.setItem('keyacces', res.data.access_token);
        Users.Data = res.data;
        $state.go('app.home');
      }, function(err){
        console.log(err);
      });
    };
  }

  angular
        .module('developers_inbricks.controllers')
        .controller('LoginCtrl', LoginCtrl);
})();
