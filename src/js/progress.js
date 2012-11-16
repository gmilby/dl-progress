function setProgress() {
	
	// Store page dimensions
	var viewportHeight = $(window).height();
	var contentHeight = $(document).outerHeight();
	if(contentHeight - viewportHeight >= 0) {
		var offscreen = contentHeight - viewportHeight;
	} else {
		var offscreen = 0;
	}
	
	// Calculate progress
	if(offscreen !=0) {
		var offset = $(window).scrollTop();
		var currentOffscreen = contentHeight - (offset + viewportHeight);
		var progress = 100 - (currentOffscreen / offscreen) * 100;
	} else {
		// If there is nothing offscreen, avoid dividing by zero
		progress = 100;
	}
	
	// Fixes over-scrolling in rubber-banding browsers
	if(progress > 100) {
		progress = 100;
	}
	if(progress < 0) {
		progress = 0;
	}
	
	/*
		Put your code here.
		Use the variable 'progress'.
		Progress is a number between 0 and 100.
		Use Math.round(progress) to give you a whole number.
	*/
	
	// Display progress
	progress = Math.round(progress);
	$('.progress').html(progress + "%");
	if(progress <= 50) {
		$('.progress').css('color', 'red');
	} else {
		$('.progress').css('color', 'green');
	}
}
	
$(document).ready(function() {
	// Run in page load
	setProgress();
	$(window).resize(function() {
		// Run if the window is resized
		setProgress();
	});
	$(window).scroll(function() {
		// Run if the user scrolls the page
		setProgress();
	});
});