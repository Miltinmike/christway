$(document).ready(function(){
      $('body').scroll(function(){
        var position =  $(this).scrollTop();
      });    
    $( window ).scroll(function() {
        if($(this).scrollTop() > 100) {
           $('.navbar-fixed nav').addClass('head-style');
        }else{
             $('.navbar-fixed nav').removeClass('head-style');
        }
    });
});
$(".button-collapse").sideNav({
    menuWidth: 200,
});
