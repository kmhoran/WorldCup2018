(function () {
    "use strict";

    angular.module(APPNAME)
    .controller('bracketController', BracketController);

    BracketController.$inject = ['$scope'];
    function BracketController($scope) {
        var vm = this;
        vm.test = "hello world!";


        vm.Group = {
            A:
                {
                    Name: 'Group A',
                    Teams: [
                {
                    Country: 'Russia'
                },
                {
                    Country: 'Saudi Arabia'
                },
                {
                    Country: 'Egypt'
                },
                {
                    Country: 'Uruguay'
                }
                    ]
                },
            B:
                {
                    Name: 'Group B',
                    Teams: [
                {
                    Country: 'Portugal'
                },
                {
                    Country: 'Spain'
                },
                {
                    Country: 'Morocco'
                },
                {
                    Country: 'Iran'
                }
                    ]
                },
            C:
                {
                    Name: 'Group C',
                    Teams: [
                {
                    Country: 'France'
                },
                {
                    Country: 'Australia'
                },
                {
                    Country: 'Peru'
                },
                {
                    Country: 'Denmark'
                }
                    ]
                },
            D:
                {
                    Name: 'Group D',
                    Teams: [
                {
                    Country: 'Argentina'
                },
                {
                    Country: 'Iceland'
                },
                {
                    Country: 'Croatia'
                },
                {
                    Country: 'Nigeria'
                }
                    ]
                },
            E:
                {
                    Name: 'Group E',
                    Teams: [
                {
                    Country: 'Brazil'
                },
                {
                    Country: 'Swizerland'
                },
                {
                    Country: 'Costa Rica'
                },
                {
                    Country: 'Serbia'
                }
                    ]
                },
            F:
                {
                    Name: 'Group F',
                    Teams: [
                {
                    Country: 'Germany'
                },
                {
                    Country: 'Sweeden'
                },
                {
                    Country: 'Mexico'
                },
                {
                    Country: 'South Korea'
                }
                    ]
                },
            G:
                {
                    Name: 'Group G',
                    Teams: [
                {
                    Country: 'Belgium'
                },
                {
                    Country: 'Panama'
                },
                {
                    Country: 'Tunisia'
                },
                {
                    Country: 'England'
                }
                    ]
                },
            H:
                {
                    Name: 'Group H',
                    Teams: [
                    {
                        Country: 'Poland'
                    },
                    {
                        Country: 'Senegal'
                    },
                    {
                        Country: 'Columbia'
                    },
                    {
                        Country: 'Japan'
                    }
                    ]
                }

        };

        // Startup
        _activate();

        //////

        function _activate() {
            //console.log('This is the Bracket Controller');
        }
    }

})();