function validar()
{
  var error = 0;
  var mensajeError = "";
  var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
  var regexNumero =/^[0-9]+$/;

  $(".mensaje").empty();

  if($("#nombreApellido").val()=="")
  {
    error++;
    mensajeError += "<p>Debe completar su nombre y apellido</p>";
  }

  if(!($("#email").val().match(regexEmail)))
  {
    error++;
    mensajeError += "<p>Debe ser un email valido</p>";
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
      mensajeError += "<p>Debe ser un telefono valido</p>"
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
