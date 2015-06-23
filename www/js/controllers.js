angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
/*
.controller('SuperMarket', function($scope, $stateParams, Supermercados) {
  $scope.Market = Supermercados.get($stateParams.chatId);
})
*/
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
