//// JavaScript Document

var $body = $('body');
var $btnMobileMenu = $('.hamburger');


$body.removeClass('show-mobile-menu');

$btnMobileMenu.click(function(){
	
	
    alert('hello');
	$body.toggleClass('show-mobile-menu');
	
});
