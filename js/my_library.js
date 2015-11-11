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

		      	// when the user has scrolled 500px
		      	if ($(window).scrollTop() <= 800) {
		        	// set up alternate navigation view
		        	$("#sidebar").hide();
		       	} else {
		       		$("#sidebar").show();
		     	}
	   		}, 50);
	   	}
	});
});