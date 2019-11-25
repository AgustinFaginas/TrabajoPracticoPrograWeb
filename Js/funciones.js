$(document).ready(function(){
    $(".desplegable").toggle(
          function() {
            $(".seccion-header").parent().find(".nav-menu").slideDown('');
          },
          function() {
            $(".seccion-header").parent().find(".nav-menu").slideUp('');
          }
        );
$(window).resize(function(){
    if($(this).width()>768){
        $(".seccion-header").parent().find(".nav-menu").show();
    } else{
        $(".seccion-header").parent().find(".nav-menu").hide();
    }
});
});
