/* bracket-knock-out.directive.js */

/**
* @desc Directive for selecting selecting eliminatio-round winners (all games after group stage)
* @example <bracket-knock-out team1='[teamObject1]' 
*                               team2='[teamObject2]' 
*                               winner='[winnerOutputObject]'></bracket-knock-out>
*/
(function () {
    "use strict";

    angular
    .module(APPNAME)
    .directive('bracketKnockOut', BracketKnockOut);

    function BracketKnockOut() {
        var directive = {
            link: _link,
            scope: {
                // '=' is two-way binding
                // '@' simply reads the value (one-way binding)
                // '&' is used to bind functions
                team1: '=',
                team2: '=',
                winner: '=',
            },
            controller: BracketKnockOutController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/Scripts/App/Brackets/bracketKnockOut.template.html',
            restrict: 'EA'

        };
        return directive;
    }

    function _link(scope, element, attrs, vm) {

        scope.$watch("vm.team1", _handleChange, false);
        scope.$watch("vm.team2", _handleChange, false);

        function _handleChange() {
            vm.winner.KnockOutWins--;
            vm.winner = null;


        }
    }
})();
