var app = angular.module("app", []);
app.controller('myControler', ['$scope', function ($scope) {
    $scope.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}]);
