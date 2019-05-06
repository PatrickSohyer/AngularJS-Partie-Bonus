var routeApp = angular.module('routeApp', ['ngRoute']); // création de ma variable routeApp pour appeler mon module angular (ng-app="routeApp"), je lui rajoute ['ngRoute'] qui permet de faire fonctionner les routes

routeApp.config(function($routeProvider) { // $routeProvider est le fournisseur du module. Il initialise le routage grâce aux rêgles qu'on lui donne lors de la configuration de notre application

  $routeProvider // Je relance RouteProvider, c'est lui qui va me permettre de définir le html pour chaque URL

    .when('/', { // le slash seul veut dire que c'est la page principal, en gros quand je suis sur la page principal ... penser à la virgule

      templateUrl: 'phil.html' // templateUrl envoie phil.html dans ma div ng-view

    }) // toujours penser à fermer l'accolade et la parenthèse

    .when('/form', { // quand je suis sur la page /form (toujours penser à la virgule)

      templateUrl: 'partials/form.html', // templateUrl va chercher mon form.html que j'ai mis dans le dossier partials
      controller: 'formCtrl' // je définis directement un controler à cet URL qui sera formCtrl

    }) // toujours penser à fermer l'accolade et la parenthèse

    .when('/mail/:recup', { // quand c'est le /mail (toujours penser à la virgule)
    // :recup est relié à $routeParams c'est lui qui va afficher l'url et me permettre de naviguer dans les différents mail
      templateUrl: 'partials/mail.html', // templateUrl va chercher mon mail.html que j'ai mis dans le dossier partials
      controller: 'mailCtrl' // je définis directement un controler à cet URL qui sera mailCtrl

    }) // toujours penser à fermer l'accolade et la parenthèse

    .otherwise({ // la je dis que sinon, ça retourne à l'accueil.

      redirectTo: '/' // je lui dis de revenir à la page d'accueil

    }) // toujours penser à fermer l'accolade et la parenthèse
}); // je ferme mon config


routeApp.run(['$rootScope', function($rootScope) { // run permet d'exécuter immédiatement un bloc d'instructions, $rootScope va exécuter dans toutes les pages
  $rootScope.subjectArray = []; // $rootScope me donne accès à toutes les pages et récupère sur tout, tableau du sujet
  $rootScope.mailArray = []; // $rootScope me donne accès à toutes les pages et récupère sur tout, tableau du mail
  $rootScope.nameArray = []; // $rootScope me donne accès à toutes les pages et récupère sur tout, tableau du nom
  $rootScope.messageArray = []; // $rootScope me donne accès à toutes les pages et récupère sur tout, tableau du message
}]);

routeApp.controller('formCtrl', ['$rootScope', '$scope', function($rootScope, $scope) { // je lance mon controller formCtrl, je lui lance $rootscop et $scope comme function

  $scope.regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{3,15}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,15}$/; // je scope ma regexName
  $scope.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // je scope ma regexMail
  $scope.regexSubject = /^[a-zA-Z0-9éèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç".;,('=+&!-_ ]{5,20}$/; // je scope ma regexSubject
  $scope.regexMessage = /^[a-zA-Z0-9éèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç".;,('=+&!-_ ]{20,1000}$/; // je scope ma regextextArea

  $scope.sendMail = function() { // je scope mon button envoyer le mail, je lui met la fonction

    $rootScope.subjectArray.push($scope.subject); // le rootscope récupère les infos dans le tableau, et je les envois avec push sur Subject
    $rootScope.mailArray.push($scope.email); // le rootscope récupère les infos dans le tableau, et je les envois avec push sur email
    $rootScope.nameArray.push($scope.name); // le rootscope récupère les infos dans le tableau, et je les envois avec push sur name
    $rootScope.messageArray.push($scope.message); // le rootscope récupère les infos dans le tableau, et je les envois avec push sur textArea
  }
}]);


routeApp.controller('mailCtrl', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams) { // je lance mon controlle mailCtrl et je lui lance $rootscope $scope et $routeParams

  $scope.subject = $rootScope.subjectArray[$routeParams.recup]; // Subject sera égal au nom que le tableau a stocké, $routeParams me permettra de récupérer et d'afficher le root
  $scope.mail = $rootScope.mailArray[$routeParams.recup];
  $scope.name = $rootScope.nameArray[$routeParams.recup];
  $scope.message = $rootScope.messageArray[$routeParams.recup];

}]);
