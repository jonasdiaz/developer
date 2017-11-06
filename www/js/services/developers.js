(function(){

  'use strict';

  function Developers($http, BASE_URL, Users){
    return {
      get: getProjects,
      save: saveDevelopers,
      update: updateDevelopers,
      delete: deleteDevelopers,
      getMensajes: getMensajes
    };

    function getProjects(desarrollador_id){
      return $http.get(BASE_URL.base + '/desarrolladores/'+desarrollador_id+'/proyectos', {
        headers: {
          'x-access-token': window.localStorage.getItem('keyacces')
        }
      });
    }

    function saveDevelopers(data){
      return $http.post(BASE_URL.base + '/desarrolladores', data, {
        headers: {
          'x-access-token': window.localStorage.getItem('keyacces')
        }
      });
    }

    function updateDevelopers(){
      return $http.put(BASE_URL.base + '/desarrolladores');
    }

    function deleteDevelopers(){

    }

    function getMensajes(desarrollador_id){
      return $http.get(BASE_URL.base + '/desarrolladores/'+desarrollador_id+'/mensajes', {
        headers: {
          'x-access-token': window.localStorage.getItem('keyacces')
        }
      });
    }
  }

  angular
        .module('developers_inbricks.services')
        .factory('Developers', Developers);
})();
