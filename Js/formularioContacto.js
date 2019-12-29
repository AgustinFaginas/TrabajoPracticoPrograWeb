function validar()
{
  var error = 0;
  var mensajeError = "";
  var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
  var regexNumero =/^[0-9]{0,4}-[0-9]{0,4}/;

  $(".mensaje").empty();
  reset();

  if($("#nombreApellido").val()=="")
  {
    error++;
    mensajeError += "<p>*Debe completar su nombre y apellido</p>";
    $("#nombreApellido").addClass("error");
  }

  if(!($("#email").val().match(regexEmail)))
  {
    error++;
    mensajeError += "<p>*Debe ser un email valido</p>";
    $("#email").addClass("error");
  }

  if($("#tel").val()=="")
  {

  }
  else
  {
    var telefono = $("#tel").val();
    if(!(telefono.match(regexNumero)))
    {
      error++;
      mensajeError += "<p>*Debe ser un telefono valido</p>"
      $("#tel").addClass("error");
    }
  }

  if(error > 0)
  {
    $("#error").append(mensajeError);
    return false;
  }
  else
  {
    return true;
  }
}

function reset()
{
  $("#nombreApellido").removeClass("error");
  $("#email").removeClass("error");
  $("#tel").removeClass("error");
}

$(document).ready(function()
{
  $("#formularioContacto").submit(function()
  {
    return validar();
  });

  var maxLength = 1000;
  $('#consulta').keyup(function()
  {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
  });

});
/*function validar()
{
  var error = 0;
  var mensajeError = "";
  var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

  if(!regexEmail.test(document.getElementById("email").value))
  {
    error++;
    mensajeError += "<p>email erroneo</p>";
  }
  if(error == 0)
  {
    return true;
  }
  else
  {
    document.getElementById("error").innerHTML = mensajeError;
    return false;
  }
}
*/
