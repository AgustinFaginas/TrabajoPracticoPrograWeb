$(document).ready(function(){

    //clonar
    $(".clonar").click(function(){
    	var clonar=$(this).parents(".contenedorCampos").clone(true); //clonar
        $(this).parent(".div-clonar-eliminar").parent(".contenedorCampos").after(clonar); //mostrar
    });


    //remover
    $(".eliminar").click(function(){
    	$(this).parents(".contenedorCampos").remove();
    });
});
