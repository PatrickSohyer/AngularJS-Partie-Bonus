var myApp = angular.module('myApp', []) // création de ma variable pour ng-app ( ng-app="myApp")

myApp.controller('myController', ['$scope', '$window', function($scope, $window) { // création de myController, j'active scope et window
  $scope.message = 'Hello, World! Comment tu vas?'; // je définis le message que balancera l'alert
  $scope.clickMe = function(message) { // je définis qu'au click du bouton, la fonction ( message ) ce lancera
    $window.alert(message); // ça envoie l'alert avec le message
  };
}]);
