jQuery(function($){

  //click auto scroll
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position;
    if(window_check()){
      position = target.offset().top;
    } else {
      position = target.offset().top - 60;
    }
    
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;

    function window_check(){
      var w = $(window).width();
      var x = 767;
      var z = w >= x ? true:false;
      return z;
    }
  });
  /*--- sp_menu ---*/
  $('.sp_btn').click(function() {
    $(this).toggleClass('active');
    $('.sp_menu').stop().slideToggle();
  });
  $('.sp_menu a').click(function() {
    $('.sp_btn').toggleClass('active');
    $('.sp_menu').stop().slideToggle();
  });
});
/*--- gotop ---*/
$(document).ready(function(){
  $(".gotop").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $('.gotop').fadeIn("fast");
    } else {
        $('.gotop').fadeOut("fast");
    }
    // scrollHeight = $(document).height();
    // scrollPosition = $(window).height() + $(window).scrollTop();
    // footHeight = $('footer').height();
    // sa = -28.5;
    // if(window_check()){
    //   if ( scrollHeight - scrollPosition  <= footHeight + sa) {
    //     $(".gotop").css({
    //         "position":"absolute",
    //         "bottom": footHeight + sa,
    //         "right" : "calc(50% - 557px)"
    //     });
    //   } else {
    //     $(".gotop").css({
    //         "position":"fixed",
    //         "bottom": "30px",
    //         "right" : "calc(50% - 557px)"
    //     });
    //   }
    // }
    // else{
    //   sa = -20;
    //   footHeight = $('footer').height();
    //   if ( scrollHeight - scrollPosition  <= footHeight + sa) {
    //     $(".gotop").css({
    //         "position":"absolute",
    //         "bottom": footHeight + sa,
    //         "right" : "3%"
    //     });
    //   } else {
    //     $(".gotop").css({
    //         "position":"fixed",
    //         "bottom": "30px",
    //         "right" : "3%"
    //     });
    //   }
    // }
    function window_check(){
      var w = $(window).width();
      var x = 767;
      var z = w >= x ? true:false;
      return z;
    }
  });
});
