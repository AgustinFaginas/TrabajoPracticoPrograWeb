var precio=2000;
$(document).ready(function(){
    //clonar
    $(".clonar").click(function(){
        precio=precio+2000;
        $(".precioInscribirse").text(precio);
    	var clonar=$(this).parents(".contenedorCampos").clone(true); //clonar
        $(this).parent(".div-clonar-eliminar").parent(".contenedorCampos").after(clonar); //mostrar
       
    });
    $(".precioInscribirse").text(precio);
    //remover
    $(".eliminar").click(function(){
       if($(".contenedorCampos").children().length > 2){
        precio=precio-2000;
        $(".precioInscribirse").text(precio);
        $(this).parents(".contenedorCampos").remove();
       }
    	
    });
    
    $(".botonInscribirse").click(function(){
        var nombres = "Felicitaciones  "+($("#nombre-A").val() +"  " + $("#apellido-A").val());
        $("#modal").text(nombres);
        
    });
    
});
