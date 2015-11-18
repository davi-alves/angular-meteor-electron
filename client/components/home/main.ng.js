angular.module('leaderboard')
  .directive('home', function () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'client/components/home/main.ng.html',
      controllerAs: 'vm',
      controller: function ($scope, $timeout) {
        $scope.players = $scope.$meteorCollection(function () {
          return Players.find({}, { sort: { score: -1, name: 1 }});
        }).subscribe('players');
        $scope.selectedPlayer = null;

        $scope.playerSelected = function (player) {
          $timeout(function () {
            $scope.selectedPlayer = player;
          });
        };

        $scope.addPoints = function () {
          $scope.selectedPlayer.score += 5;
          $scope.players.save($scope.selectedPlayer);
        };
      }
    };
  });
