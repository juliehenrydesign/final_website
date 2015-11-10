// $(document).ready(function(){
	
// $(window).scrollTop()
// if ($(window).scrollTop() >= 500) {


$(document).ready(function() {
$(".fa-diamond").click(function() {
  if ($("ul").hasClass("open")) {
    $("ul").slideUp();
    $("ul").removeClass("open");
  } else {
    $("ul").slideDown();
    $("ul").addClass("open");
  }
});

var timeout = null;

$(window).scroll(function() {
  if (!timeout) {
    // tl;dr setting timeout for browser performance
    timeout = setTimeout(function() {
      clearTimeout(timeout);
      timeout = null;

      // when the user has scrolled 500px
      if ($(window).scrollTop() >= 500) {
        // set up alternate navigation view
        $("ul").hide();

        $("ul").css({
          width: "100%",
          borderTop: "1px solid black"
        });

        $("ul li").css({
          width: "100%",
          borderBottom: "1px solid black"
        });

        $(".fa-diamond").show();
      } else {
        // remove alternate navigation view
        $("ul").attr("style", "");
        $("ul li").attr("style", "");
        $(".fa-diamond").attr("style", "");
      }
    }, 250);
  }
});
});