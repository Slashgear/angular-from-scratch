(function() {
    'use strict';

    angular
        .module('myApp')
        .component('markedList',{
          template:"<div ng-repeat='elem in $ctrl.list track by $index'>"+
                      "<div>"+
                        "{{elem}}"+
                      "</div>"+
                    "</div>",
          bindings:{
            list:'<'
          }
        });
})();
