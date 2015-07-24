//****************************************************
angular.module('starter.controllers', ['ionic'])


.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/browse.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
//**************************************************************
//*********************  POPOVER  ******************************

.controller('AppCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }

})
//**************************************************************
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Supermercado',icon:'E', id: 'supermercado' },
    { title: 'Restaurantes',icon:'F', id: 'restaurantes' },
    { title: 'Moda',icon:'G', id: 'moda' },
    { title: 'Entretenimiento',icon:'H', id: 'entretenimiento' },
    { title: 'Electrónicos',icon:'I', id: 'electronicos' },
    { title: 'Otros',icon:'J', id: 'otros' }
  ];
})

.controller('Supermercado', function($scope) {
  $scope.playlists = [
    { title: 'La TorreL', id: 'supermer' },
    { title: 'wallmart', id: 'restaurantes' },
    { title: 'paiz', id: 'centro' }
  ];
})

.controller('Supermer', function($scope) {
  $scope.playlists = [
    { title: 'La Torre 2*1', id: '2x1' },
    { title: 'la torre -20%', id: '20' },
    { title: 'la torre platos', id: 'platos' }
  ];
})
//********************************************************
//********************************************************




.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();

})

.controller('SupermercadoCtrl', function($scope, Supermercados) {
  $scope.chats = Supermercados.all();

})

.controller('RestaurantesCtrl', function($scope, Restaurantes) {
  $scope.chats = Restaurantes.all();

})

.controller('ModaCtrl', function($scope, Moda) {
  $scope.chats = Moda.all();

})

.controller('EntretenimientoCtrl', function($scope, Entretenimiento) {
  $scope.chats = Entretenimiento.all();

})

.controller('ElectronicosCtrl', function($scope, Electronicos) {
  $scope.chats = Electronicos.all();

})
.controller('PaizCtrl', function($scope, $stateParams, Paiz) {
   $scope.chats = Paiz.all();
})

.controller('CategoryCtrl', function($scope, Categorys) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.categorys = Categorys.all();

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Categorys) {
  $scope.chat = Categorys.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
