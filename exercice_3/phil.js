$('#formSignUp').hide();


$('#showSignUp').click(function() {
  $('#bodyPage').hide();
  $('#formSignUp').show();
});

$('#showBodyPage').click(function() {
  $('#formSignUp').hide();
  $('#bodyPage').show();
});


var regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{2,15}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,15}$/;
var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_.])([-.+!*$@%_\w]{8,15})$/;
// Entre 8 et 15 caractères, au moins une minuscule et une majuscule, un chiffre et un caractère spécial



// 1ère fonction : permet de vérifier la confirmation du mot de passe

$("#confirmPassword").focusout(function() {
  var password = $("#password").val();
  var confirmPassword = $("#confirmPassword").val();
  if (password == "") {
    $("#password").css("border", "solid 1px red");
    $("#confirmPassword").css("border", "solid 1px red");
    alert("Veuillez entrer votre mot de passe dans le premier champs !");
  } else if (confirmPassword == "") {
    $("#password").css("border", "solid 1px green");
    $("#confirmPassword").css("border", "solid 1px red");
    alert("Veuillez entrer votre mot de passe dans le second champs !");
  } else if (password != confirmPassword) {
    $("#confirmPassword").css("border", "solid 1px red");
    alert("Confirmation du mot de passe invalide");
  } else {
    $("#password").css("border", "solid 1px green");
    $("#confirmPassword").css("border", "solid 1px green");
  }
});


// Début des regex

$("#submitForm").click(function() {


  var password = $("#password").val();
  var confirmPassword = $("#confirmPassword").val();

  if (!regexName.test($("#lastName").val())) {
    alert("Vous avez fait une erreur dans le nom.");
    $("#lastName").css("border", "solid red 1px");
  } else if (!regexName.test($("#firstName").val())) {
    alert("Vous avez fait une erreur dans le prénom.");
    $("#firstName").css("border", "solid red 1px");
  } else if (!regexMail.test($("#mail").val())) {
    alert("Vous avez fait une erreur dans l'addresse e-mail.")
    $("#mail").css("border", "solid red 1px");
  } else if (!regexPassword.test($("#password").val())) {
    alert("Vous avez fait une erreur dans le mot de passe.")
    $("#password").css("border", "solid red 1px");
  } else if (!regexPassword.test($("#confirmPassword").val())) {
    alert("Vous avez fait une erreur dans le mot de passe.")
    $("#password").css("border", "solid red 1px");
  } else {

  $("#formSignUp").hide();
  $("#submit").hide();

  var lastName = $("#lastName").val();
  var firstName = $("#firstName").val();
  var mail = $("#mail").val();

  swal.fire("Bienvenue " + firstName + " ! La création de ton compte s'est déroulée sans encombre, et pour te le prouver, nous venons de t'envoyer un e-mail de confirmation à ton adresse " + mail + ". En te souhaitant une belle expérience sur notre site !");

  $("#bodyPage").show();
}


});
