// $(document).ready(function(){
	
// $(window).scrollTop()
// if ($(window).scrollTop() >= 500) {


$(document).ready(function() {

 // if ($("#showSidebar").scroll() >== 679) {
 //  $("sidebar").show();
 // }

 	var timeout;

	$(window).scroll(function() {
	  	if (!timeout) {
	    	// tl;dr setting timeout for browser performance
	    	timeout = setTimeout(function() {
		      	clearTimeout(timeout);
		      	timeout = null;

		      	// when the user has scrolled 820px
		      	if ($(window).scrollTop() <= 820) {
		        	// set up alternate navigation view
		        	$("#sidebar").hide();
		       	} else {
		       		$("#sidebar").show();
		     	}
	   		}, 50);
	   	}
	});
	
	$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      1500);
});
});