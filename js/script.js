jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1000);
	});
});



//Scrolling

$(document).ready(function(){
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	   $('html, body').stop().animate({
    	 'scrollTop': $target.offset().top
		}, 900, 'swing');
	});
});