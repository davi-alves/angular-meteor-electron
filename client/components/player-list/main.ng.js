angular.module('leaderboard')
  .directive('playerList', function () {
    return {
      scope: {
        players: '=',
        onSelect: '&'
      },
      restrict: 'E',
      templateUrl: 'client/components/player-list/list.ng.html',
      controllerAs: 'vm',
      controller: function ($scope) {
        this.selectPlayer = function (player) {
          this.selectedPlayer = player;
          if (typeof $scope.onSelect === 'function') {
            $scope.onSelect({ player: player });
          }
        };
      }
    };
  })
  .directive('player', function () {
    return {
      scope: {
        player: '='
      },
      restrict: 'E',
      require: '^playerList',
      templateUrl: 'client/components/player-list/list-item.ng.html',
      link: function ($scope, element, attr, PlayerList) {
        element.on('click', function () {
          PlayerList.selectPlayer($scope.player);
        });

        $scope.isSelected = function () {
          return PlayerList.selectedPlayer && $scope.player._id === PlayerList.selectedPlayer._id;
        };
      }
    };
  });
