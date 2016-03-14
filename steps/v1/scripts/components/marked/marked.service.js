  (function() {
      'use strict';

      angular
          .module('myApp')
          .service('markedService', markedService);

      /* @ngInject */
      function markedService($http) {
          this.getMarkdownFile = getMarkdownFile;

          function getMarkdownFile(url) {
              return $http.get(url).then(function(response){
                  return response.data;
              });
          }
      }
  })();
