angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.events', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu.eventsList', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventsList.html',
        controller: 'eventsListCtrl'
      }
    }
  })

  .state('menu.eventDetail', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventDetail.html',
        controller: 'eventDetailCtrl'
      }
    }
  })

  .state('menu.map', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('menu.createEvent', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      }
    }
  })

  .state('chat', {
    url: '/page9',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});