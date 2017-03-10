//// JavaScript Document

// var $body = $('nav');
// var $btnMobileMenu = $('.hamburger');



// $body.removeClass('main-nav');

// $btnMobileMenu.click(function(){
	
	
// 	$body.toggleClass('main-nav');
	
// });


var $body = $('body');
var $btnMobileMenu = $('.hamburger');


$body.removeClass('show-mobile-nav');

$btnMobileMenu.click(function(){
	
	
	$body.toggleClass('show-mobile-nav');
	
});