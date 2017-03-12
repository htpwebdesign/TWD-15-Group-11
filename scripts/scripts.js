//// JavaScript Document


var $body = $('body');
var $btnMobileMenu = $('.hamburger');


$body.removeClass('show-mobile-nav');

$btnMobileMenu.click(function(){
	
	
	$body.toggleClass('show-mobile-nav');
	
});