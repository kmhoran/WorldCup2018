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
        vm.isLocked = false;
        // methods
        vm.selectTeam = _selectTeam;

        //////

        function onInit() {
            //console.log("group: ", vm.group);
        }



        function _selectTeam(team) {
            if (vm.isLocked) {
                return false;
            }
            //vm.isLocked = true;
            if (_isWinner(team)) {
                vm.group.Winner.GroupRank = 0;

                if (vm.group.RunnerUp) {
                    vm.group.RunnerUp.GroupRank = 1;

                    vm.group.Winner = vm.group.RunnerUp;
                    vm.group.RunnerUp = null;
                }
                else {
                    vm.group.Winner = null;
                }
                
                //vm.isLocked = false;
                return true;
            }
            if (_isRunnerUp(team)) {
                vm.group.RunnerUp.GroupRank = 0;
                vm.group.RunnerUp = null;
                //vm.isLocked = false;
                return true;
            }

            // Find runner Up
            if (vm.group.Winner && !vm.group.RunnerUp) {
                if (team.GroupRank == 1) {
                    return false;
                }

                for (var i = 0; i < vm.group.Teams.length; i++) {
                    if (vm.group.Teams[i].Country == team.Country) {

                        vm.group.Teams[i].GroupRank = 2;
                        vm.group.RunnerUp = vm.group.Teams[i];
                        return true;
                    }
                }
            }
            // find winer
            if (!vm.group.Winner) {
                for (var i = 0; i < vm.group.Teams.length; i++) {
                    if (vm.group.Teams[i].Country == team.Country) {

                        vm.group.Teams[i].GroupRank = 1;
                        vm.group.Winner = vm.group.Teams[i];
                        return true;
                    }
                }
            }
            return false;
        }
           



        function _isWinner(team) {
            return team.GroupRank == 1;
        }



        function _isRunnerUp(team) {
            return team.GroupRank == 2;
        }
    }

//})();