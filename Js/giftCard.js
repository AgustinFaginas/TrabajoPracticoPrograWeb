$(document).ready(function(){
	$("#abajo-derecha").click(function() {
	    if($(this).is(':checked')) {
	        $("#giftCard_precio").css({
	        	top: '70%',
	        	right: '4%',
	        });
	    }
	});

	$("#arriba-derecha").click(function() {
	    if($(this).is(':checked')) {
	        $("#giftCard_precio").css({
	        	top: '15%',
	        	right: '4%',
	        });
	    }
	});

	$("#arriba-izquierda").click(function() {
	    if($(this).is(':checked')) {
	        $("#giftCard_precio").css({
	        	top: '15%',
	        	right: '84%',
	        });
	    }
	});

	$("#nombreDestinatario").on("change paste keyup", function() {
		/* Act on the event */
		$("#nombre_destinatario").text($("#nombreDestinatario").val());
	});

	$("#monto").on("change paste keyup", function() {
		$("#giftCard_precio").text(" $"+ $("#monto").val());
	});

	$("input[name=selector-fondo]").change(function(event) {
		/* Act on the event */
		if($(this).val() == "fondo1"){
			$("#giftcard").css("background-image","url(img/fondo1.jpg)");
		}else if ($(this).val() == "fondo2") {
			$("#giftcard").css("background-image","url(img/fondo2.jpg)");
		}else if ($(this).val() == "fondo3") {
			$("#giftcard").css("background-image","url(img/fondo3.jpg)");
		}else if ($(this).val() == "fondo4") {
			$("#giftcard").css("background-image","url(img/fondo4.jpg)");
		}else if ($(this).val() == "fondo5") {
			$("#giftcard").css("background-image","url(img/fondo5.jpg)");
		}
	});

	$("input[name=selector-pixel]").change(function(event) {
		if($(this).val() == "20"){
			$("#nombre_destinatario").css("font-size","20px");
		}else if ($(this).val() == "28"){
			$("#nombre_destinatario").css("font-size","28px");
		}else if ($(this).val() == "32"){
			$("#nombre_destinatario").css("font-size","32px");
		}else if ($(this).val() == "48"){
			$("#nombre_destinatario").css("font-size","48px");
		}else if ($(this).val() == "60"){
			$("#nombre_destinatario").css("font-size","60px");
		}
	});

	$("input[name=selector-color]").change(function(event) {
		if($(this).val() == "rojo"){
			$("#nombre_destinatario").css("color","red");
		}else if ($(this).val() == "amarillo"){
			$("#nombre_destinatario").css("color","yellow");
		}else if ($(this).val() == "verde"){
			$("#nombre_destinatario").css("color","green");
		}else if ($(this).val() == "marron"){
			$("#nombre_destinatario").css("color","brown");
		}
	});
});
