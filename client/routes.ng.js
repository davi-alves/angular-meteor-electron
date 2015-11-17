angular.module('leaderboard')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      });

    $urlRouterProvider.otherwise('/');
  });
