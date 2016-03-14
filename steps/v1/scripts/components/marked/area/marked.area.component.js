(function() {
    'use strict';

    angular
        .module('myApp')
        .component('markedArea',{
          template :"<marked-list list='$ctrl.list'></marked-list>"+
          "<marked-input on-add='$ctrl.add(value)' value='$ctrl.current'><marked-input>",
          controller:function(){
            var vm = this;
            vm.list = [];

            vm.add = function(value){
              vm.list.push(value);
              vm.current = "";
            };
          }
        });
})();
