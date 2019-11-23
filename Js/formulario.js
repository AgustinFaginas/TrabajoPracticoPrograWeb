$(document).ready(function(){

    //clonar
    $(".contenedorCampos .clonar").click(function(){
    	var clonar=$(this).parent(".contenedorCampos").clone(true); //clonar
        $(this).parent(".contenedorCampos").after(clonar); //mostrar
    });
        
    
    //remover
    $(".contenedorCampos .eliminar").click(function(){
    	$(this).parent(".contenedorCampos").remove();
    });
});