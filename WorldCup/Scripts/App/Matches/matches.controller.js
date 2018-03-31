(function () {
    "use strict";

    angular.module(APPNAME)
    .controller('matchesController', MatchesController);

    MatchesController.$inject = ['$scope'];

    function MatchesController($scope) {
        var vm = this;
        vm.test = "matches controller";

        vm.dates = [
            {
                date: '2018-06-14',
                matchCount:1
            },
            {
                date: '2018-06-15',
                matchCount: 3
            },
            {
                date: '2018-06-16',
                matchCount: 4
            },
            {
                date: '2018-06-17',
                matchCount: 3
            },
            {
                date: '2018-06-18',
                matchCount: 3
            },
            {
                date: '2018-06-19',
                matchCount: 3
            },
            {
                date: '2018-06-20',
                matchCount: 3
            },
            {
                date: '2018-06-21',
                matchCount: 3
            },
            {
                date: '2018-06-22',
                matchCount: 3
            },
            {
                date: '2018-06-23',
                matchCount: 3
            },
            {
                date: '2018-06-24',
                matchCount: 3
            },
            {
                date: '2018-06-25',
                matchCount: 4
            },
            {
                date: '2018-06-26',
                matchCount: 4
            },
            {
                date: '2018-06-27',
                matchCount: 4
            },
            {
                date: '2018-06-28',
                matchCount: 4
            },
            {
                date: '2018-06-29',
                matchCount: 0
            },
            {
                date: '2018-06-30',
                matchCount: 2
            },
            {
                date: '2018-07-01',
                matchCount: 2
            },
            {
                date: '2018-07-02',
                matchCount: 2
            },
            {
                date: '2018-07-03',
                matchCount: 2
            },
            {
                date: '2018-07-04',
                matchCount: 0
            },
            {
                date: '2018-07-05',
                matchCount: 0
            },
            {
                date: '2018-07-06',
                matchCount: 2
            },
            {
                date: '2018-07-08',
                matchCount: 0
            },
            {
                date: '2018-07-09',
                matchCount: 0
            },
            {
                date: '2018-07-10',
                matchCount: 1
            },
            {
                date: '2018-07-11',
                matchCount: 1
            },
            {
                date: '2018-07-12',
                matchCount: 0
            },
            {
                date: '2018-07-13',
                matchCount: 0
            },
            {
                date: '2018-07-14',
                matchCount: 1
            },
            {
                date: '2018-07-15',
                matchCount: 1
            }
        ]

        vm.matches = [
            {
                date: '20180614',
                location: 'Ekaterinburg Arena',
                city: 'Ekaterinburg'
            }
        ]


        // Startup
        _activate();

        //////

        function _activate() {
            //console.log('This is the Bracket Controller');
        }
    }

})();