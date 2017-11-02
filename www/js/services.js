(function(){

  'use strict';

  var url = 'http://dev.inbricks.viveogroup.com/api/v1';

  angular
        .module('developers_inbricks.services', [])
        .constant('BASE_URL', {base: url});
})();
