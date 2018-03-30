
BracketKnockOutController.$inject = ['$scope'];
function BracketKnockOutController($scope) {
    var vm = this;
    vm.test = "this is the Knock Out Controller";
    vm.team1 = vm.team1;
    vm.team2 = vm.team2;
    vm.winner = vm.winner;
    vm.$onInit = onInit;


    // methods
    vm.selectTeam = _selectTeam;
    //////

    function onInit() {

    }


    function _selectTeam(team) {
        if (!vm.team1 || !vm.team2) {
            return false;
        }
        if (vm.winner) {
            if (vm.winner.Country === team.Country) {
                team.KnockOutWins--;
                vm.winner = null;
                return true;
            }
            else {
                vm.winner.KnockOutWins--;
                team.KnockOutWins++;
                vm.winner = team;
                return true;
            }
        }
        else {
            team.KnockOutWins++;
            vm.winner = team;
            return true;
        }
    }
}

