(function(){

  'use strict';

  function Proyectos($http, BASE_URl){
    return {
      get: getProyectos
    };

    function getProyectos(proyecto_id){
      return $http.get(BASE_URl.base + '/proyectos/'+proyecto_id+'/mensajes', {
        headers: {
          'x-access-token': window.localStorage.getItem('keyacces')
        }
      });
    }
  }

  angular.module('developers_inbricks.services')
        .factory('Proyectos', Proyectos);
})();
