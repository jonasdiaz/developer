(function(){

  'use strict';

  function User($http, BASE_URL){
    return {
      login: login,
      get: getUser
    };

    function login(data){
      return $http.post(BASE_URL.base + '/login', data);
    }

    function getUser(){
      
    }
  }

  angular
        .module('developers_inbricks.services')
        .factory('User', User);
})();
