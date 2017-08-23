$(document).ready(function(){
  (function($) {
		$(function() {

            $('header .dropdown-button').dropdown({
              //  inDuration: 300,
                outDuration: 0,
                hover: true, // Activate on hover
              //  belowOrigin: true, // Displays dropdown below the button
              //  alignment: 'right' // Displays dropdown with edge aligned to the left of button
                }
              );
      }); // End Document Ready
      $('body').scroll(function(){
        var position =  $(this).scrollTop();
      });    

    $( window ).scroll(function() {
        if($(this).scrollTop() > 100) {
           $('.navbar-fixed nav').addClass('head-style');
        }else{
             $('.navbar-fixed nav').removeClass('head-style');
        }
        // $('section').addClass('transit');
    });
  })(jQuery); // End of jQuery name space
});