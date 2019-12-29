$(document).ready(function(){
      var contador = sessionStorage.getItem("contador");
          if(contador == null || contador == NaN){
            contador = 0;
          }
      $("#total").text(contador);
			$(".content-tab:not(:eq(0))").toggle();
			$(".title-tab i").toggleClass("fa-plus");

			$(".title-tab").click(function(){
				$(".content-tab").hide();
				$(".title-tab i").removeClass("fa-minus");
				$(".title-tab i").addClass("fa-plus");
				$(this).next().show();
				$(this).children().addClass("fa-minus");
			});

      $(".desplegable").toggle(
          function() {
            $(this).parents().find(".nav-menu").slideDown('');
          },
          function() {
            $(this).parents().find(".nav-menu").slideUp('');
          }
        );
        $(window).resize(function(){
          if($(this).width()>768){
            $(".desplegable").parents().find(".nav-menu").show();
          } else{
            $(".desplegable").parents().find(".nav-menu").hide();
          }
        });

        $("[name=button]").click(function(event) {
          /* Act on the event */
          var contador = sessionStorage.getItem("contador");
          if(contador == null || contador == NaN){
            contador = 0;
          }
          contador++;
          $("#total").text(contador);
          sessionStorage.setItem("contador", contador);
        });

});
