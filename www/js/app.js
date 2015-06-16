// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
function check() {
    setInterval(function(){ 
       document.getElementById("intervaloFrenzy").click(); 
    }, 5000);
};
check()

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
    
 /* $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.data.authenticate && !Parse.User.current()) {
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
    }
  });
    
*/
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  
  

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'homeCtrl'
      }      
    }
  })
  /*****************page begin*******************/
 .state('frenzy', {
    url: "/frenzy",
     templateUrl: 'templates/frenzy.html',
      controller: 'homeCtrl',
      data: {
        authenticate: true
      }
  })
  /**************template login facebook**********************/
 
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      data: {
        authenticate: true
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',
      
      data: {
        authenticate: false
      }
    });

  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/frenzy');
  //$urlRouterProvider.otherwise('/tab/dash');

})
// ############## //
//                //
//  Controllers   //
//                //
// ############## //
.controller('rootCtrl', ['$state', function($state) {
  $state.go('home');
}])

.controller('homeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.logout = function() {
    console.log('Logout');
    /* 
    facebookConnectPlugin.logout(
      function (success) {
        $state.go('login');
      },
      function (failure) { console.log(failure) }
    );
    */
    Parse.User.logOut();
    $state.go('login');
  };
}])

.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
  var fbLogged = new Parse.Promise();
    
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }
    var expDate = new Date(
      new Date().getTime() + response.authResponse.expiresIn * 1000
    ).toISOString();

    var authData = {
      id: String(response.authResponse.userID),
      access_token: response.authResponse.accessToken,
      expiration_date: expDate
    }
    fbLogged.resolve(authData);
    console.log(response);
  };

  var fbLoginError = function(error){
    fbLogged.reject(error);
  };

  $scope.login = function() {
    console.log('Login');
    if (!window.cordova) {
      facebookConnectPlugin.browserInit('813128998755561');
    }
    facebookConnectPlugin.login(['email','user_birthday', 'user_likes',
'user_hometown',
'user_location'], fbLoginSuccess, fbLoginError);
  
    fbLogged.then( function(authData) {
      console.log('Promised');
      return Parse.FacebookUtils.logIn(authData);
    })
    .then( function(userObject) {
      facebookConnectPlugin.api('/me', null, 
        function(response) {
          console.log(response);
      userObject.set('name', response.name);
          userObject.set('email', response.email);
          userObject.set('birthday', response.birthday);
          userObject.set('likes', response.likes);
          userObject.set('location', response.location);
          userObject.set('hometown', response.hometown);
          userObject.save();
        },
        function(error) {
          console.log(error);
        }
      );
      $state.go('home');
    }, function(error) {
      console.log(error);
    });
  };
}])


