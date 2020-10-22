// stickup js ==========

//initiating jQuery
jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
});


//initiating jQuery
AOS.init();

// animationCounter
$('.demo1').animationCounter({
    start: 0,
    end: 4000,
    step: 5,
    delay: 30
});
$('.demo2').animationCounter({
    start: 0,
    end: 260,
    delay: 100
});
$('.demo3').animationCounter({
    start: 0,
    end: 5879,
    step: 5,
    delay: 30
});