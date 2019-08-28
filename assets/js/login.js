var a = "admin";

$(document).ready(function() {
  $('#logar').on('click', function() {
    if (a == $('#username').val()) {
      alert($('#username').val());
    } else {
      alert("outra coisa");
    }
  });

});