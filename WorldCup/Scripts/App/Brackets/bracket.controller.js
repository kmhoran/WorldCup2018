(function () {
    "use strict";

    angular.module(APPNAME)
    .controller('bracketController', BracketController);

    BracketController.$inject = ['$scope'];
    function BracketController($scope) {
        var vm = this;
        vm.test = "hello world!";

        vm.obj = null;

        vm.Group = {
            A:
                {
                    Name: 'Group A',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    Group: 'A',
                    FlagSrc: "/Resources/Images/svg_flags/ru.svg",
                    Country: 'Russia',
                    GroupRank: 0,
                    KnockOutWins: 0
                    
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/sa.svg",
                    Country: 'Saudi Arabia',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/eg.svg",
                    Country: 'Egypt',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/uy.svg",
                    Country: 'Uruguay',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            B:
                {
                    Name: 'Group B',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/pt.svg",
                    Country: 'Portugal',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/es.svg",
                    Country: 'Spain',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/ma.svg",
                    Country: 'Morocco',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/ir.svg",
                    Country: 'Iran',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            C:
                {
                    Name: 'Group C',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/fr.svg",
                    Country: 'France',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/au.svg",
                    Country: 'Australia',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/pe.svg",
                    Country: 'Peru',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/dk.svg",
                    Country: 'Denmark',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            D:
                {
                    Name: 'Group D',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/ar.svg",
                    Country: 'Argentina',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/is.svg",
                    Country: 'Iceland',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/hr.svg",
                    Country: 'Croatia',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/ng.svg",
                    Country: 'Nigeria',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            E:
                {
                    Name: 'Group E',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/br.svg",
                    Country: 'Brazil',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/ch.svg",
                    Country: 'Swizerland',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/cr.svg",
                    Country: 'Costa Rica',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/rs.svg",
                    Country: 'Serbia',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            F:
                {
                    Name: 'Group F',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/de.svg",
                    Country: 'Germany',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/se.svg",
                    Country: 'Sweeden',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/mx.svg",
                    Country: 'Mexico',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/kr.svg",
                    Country: 'South Korea',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            G:
                {
                    Name: 'Group G',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                {
                    FlagSrc: "/Resources/Images/svg_flags/be.svg",
                    Country: 'Belgium',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/pa.svg",
                    Country: 'Panama',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/tn.svg",
                    Country: 'Tunisia',
                    GroupRank: 0,
                    KnockOutWins: 0
                },
                {
                    FlagSrc: "/Resources/Images/svg_flags/gb-eng.svg",
                    Country: 'England',
                    GroupRank: 0,
                    KnockOutWins: 0
                }
                    ]
                },
            H:
                {
                    Name: 'Group H',
                    Winner: null,
                    RunnerUp: null,
                    Teams: [
                    {
                        FlagSrc: "/Resources/Images/svg_flags/pl.svg",
                        Country: 'Poland',
                        GroupRank: 0,
                        KnockOutWins: 0
                    },
                    {
                        FlagSrc: "/Resources/Images/svg_flags/sn.svg",
                        Country: 'Senegal',
                        GroupRank: 0,
                        KnockOutWins: 0
                    },
                    {
                        FlagSrc: "/Resources/Images/svg_flags/co.svg",
                        Country: 'Columbia',
                        GroupRank: 0,
                        KnockOutWins: 0
                    },
                    {
                        FlagSrc: "/Resources/Images/svg_flags/jp.svg",
                        Country: 'Japan',
                        GroupRank: 0,
                        KnockOutWins: 0
                    }
                    ]
                }
        };

        vm.matchWinner = {
            fouryNine: null,
            fifty: null,
            fiftyOne: null,
            fiftyTwo: null,
            fiftyThree: null,
            fiftyFour: null,
            fiftyFive: null,
            fiftySix: null,
            fiftySeven: null,
            fiftyEight: null,
            fiftyNine: null,
            sixty: null,
            sixtyOne: null,
            sixtyTwo: null
        }

        vm.Winner = null;

        // Startup
        _activate();

        //////

        function _activate() {
            //console.log('This is the Bracket Controller');
        }
    }

})();