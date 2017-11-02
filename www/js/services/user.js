(function(){

  'use strict';

  function Users($http, $state, $location, BASE_URL){
    return {
      login: login,
      get: getUser,
      isLogged: isLogged,
      Data: {}
    };

    function login(data){
      return $http.post(BASE_URL.base + '/login', data);
    }

    function getUser(id){
      return $http.get(BASE_URL.base + '/users/'+id+'/desarrollador/', {
        headers: {
          'x-access-token': window.localStorage.getItem('keyacces')
        }
      });
    }

    function logout(){
      return $http({
        method: 'POST',
        url: BASE_URL.base + '/logout',
        headers: { 'x-access-token': window.localStorage.getItem('keyacces') }
      });
    }

    function isLogged(){
      var deferred = $q.defer();
      var key = window.localStorage.getItem('keyacces');
      if(key === null || key === ''){
        $location.path('/login');
      }else{
        $state.go('app.home');
      }
    }
  }

  angular
        .module('developers_inbricks.services')
        .factory('Users', Users);
})();
