"use strict";

$(document).ready(function() {
	$('.next').on('click', function() {
		let currentImg = $('.active');
		let nextImg = currentImg.next();
		if(nextImg.length) {
			currentImg.removeClass('active').css('z-index', -100);
			nextImg.addClass('active').css('z-index', 100);
		}
	});
		
$('.prev').on('click', function() {
		let currentImg = $('.active');
		let prevImg = currentImg.prev();
			
		if(prevImg.length) {
				currentImg.removeClass('active').css('z-index', -100);
				prevImg.addClass('active').css('z-index', 100);
	}
	})
});