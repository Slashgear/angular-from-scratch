(function() {
    'use strict';

    angular
        .module('myApp')
        .component('markedInput',{
          template :"<input type='text' class='form-control' ng-model='$ctrl.value'/>" +
          "<button type='button' class='btn btn-success' ng-click='$ctrl.onAdd({value:$ctrl.value})'>Add</button>",
          bindings:{
            onAdd:'&',
            value:'='
          }
        });
})();
