var a = "admin";

$(document).ready(function() {
  $('#logar').on('click', function() {
    if (a == $('#username').val()) {
      window.location.href = "../pages/template/administrador.html";
    } else {
      window.location.href = "../pages/template/consumidor.html";
    }
  });

});