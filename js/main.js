(function($){

'use strict'

/*Header Section*/

$('.menu-icon i.fa-bars').on('click', function(){
	$('.navigation').slideDown();
	$('.menu-icon i.fa-times').show();
	$(this).hide();
});

$('.menu-icon i.fa-times').on('click', function(){
	$('.navigation').slideUp();
	$('.menu-icon i.fa-bars').show();
	$(this).hide();
});

$(window).resize(function(){
	let screenSize = $(window).width();
	if(screenSize>991){
		$('.navigation').removeAttr('style');
	}
});

/*Fixed Header*/

$(window).scroll(function(){
	let scrollSize = $(window).scrollTop();
	if(scrollSize>100){
		$('header').addClass('fixed-header');
	}
	else{
		$('header').removeClass('fixed-header');
	}
});

/*Arrow Section*/

$(window).scroll(function(){
	let scrollSize = $(window).scrollTop();
	if(scrollSize>1000){
		$('.arrow-area').fadeIn();
	}
	else{
		$('.arrow-area').fadeOut();	
	}
});


$('.arrow-icon i').on('click', function(){
	$('html').animate({scrollTop:0});
});


/*Isotope button Section*/
$('.isotope-btn button').on('click', function(){
	$('.isotope-btn button').removeClass('active-btn')
	$(this).addClass('active-btn');
});
// Isotop plugin
$(document).ready(function(){
	let mixer = mixitup('.demo');
})

/*Veno Box*/
new VenoBox();






}) (jQuery);