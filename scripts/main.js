$(function() {

  $(window).scroll(function(){
    $(".mouse-wrapper img").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".mouse-wrapper div p").css("opacity", 1 - $(window).scrollTop() / 500);

  });
});
