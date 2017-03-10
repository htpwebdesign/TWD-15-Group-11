//// JavaScript Document

var $body = $('nav');
var $btnMobileMenu = $('.hamburger');


$body.removeClass('main-nav');

$btnMobileMenu.click(function(){
	
	
//    alert('hello');
	$body.toggleClass('main-nav');
	
});
