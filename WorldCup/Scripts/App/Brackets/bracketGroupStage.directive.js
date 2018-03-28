/// <reference path="bracketGroupStage.directive.html" />
/* bracket-group-stage.directive.js */

/**
* @desc Directive for selecting group-stage winners and pushing them to the round of 16
* @example <bracket-group-stage group="A"></bracket-group-stage>
*/
(function () {
    "use strict";

    angular
    .module(APPNAME)
    .directive('bracketGroupStage', BracketGroupStage);

    function BracketGroupStage() {
        var directive = {
            link: _link,
            scope: {
                // '=' is two-way binding
                // '@' simply reads the value (one-way binding)
                // '&' is used to bind functions
                group: '='
            },
            controller: BracketGroupStageController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/Scripts/App/Brackets/bracketGroupStage.directive.html',
            restrict: 'EA'
            
        };
        return directive;
    }

    function _link(scope, element, attrs, vm) {
        
    }
})();
