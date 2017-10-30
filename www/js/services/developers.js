(function(){

  'use strict';

  function Developers($http, BASE_URL, User){
    return {
      get: getProjects,
      save: saveDevelopers,
      update: updateDevelopers,
      delete: deleteDevelopers
    };

    function getProjects(){
      return $http.get(BASE_URL.base + '/desarrolladores/'+desarrollador_id+'/proyectos', {
        params: {
          desarrollador_id: desarrollador_id
        },
        headers: {
          'x-access-token': User.data.access_token
        }
      });
    }

    function saveDevelopers(data){
      return $http.post(BASE_URL.base + '/desarrolladores', data, {
        headers: {
          'x-access-token': User.data.access_token
        }
      });
    }

    function updateDevelopers(){
      return $http.put(BASE_URL.base + '/desarrolladores');
    }

    function deleteDevelopers(){

    }
  }

  angular
        .module('developers_inbricks.services')
        .factory('Developers', Developers);
})();
