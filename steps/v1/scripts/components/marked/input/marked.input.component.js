(function() {
    'use strict';

    angular
        .module('myApp')
        .component('markedInput',{
          template :"<div class='col-lg-6 input-group'>"+
                      "<input type='text' class='form-control' ng-model='$ctrl.value'>"+
                      "<span class='input-group-btn'>"+
                        "<button class='btn btn-default' type='button' ng-click='$ctrl.onAdd({value:$ctrl.value})'>Add!</button>"+
                      "</span> "+
                    "</div>",
          bindings:{
            onAdd:'&',
            value:'='
          }
        });
})();
