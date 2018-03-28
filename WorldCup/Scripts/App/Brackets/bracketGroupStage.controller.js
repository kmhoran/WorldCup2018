//(function () {
//    "use strict";

//    angular
//    .module(APPNAME)
//    .controller('bracketGroupStageController', BracketGroupStageController);

    BracketGroupStageController.$inject = ['$scope'];
    function BracketGroupStageController($scope) {
        var vm = this;
        vm.test = "hello world!";
        vm.group = vm.group
        vm.$onInit = onInit;

        //////

        function onInit() {
            console.log("group: ", vm.group);
        }
    }

//})();