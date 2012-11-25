function setProgress() {
	// Store page dimensions
	var viewportHeight = $(window).height(),
		contentHeight = $(document).outerHeight(),
		offscreen = 0,
		progress = 0,
		offset;

	if (contentHeight - viewportHeight >= 0) {
		offscreen = contentHeight - viewportHeight;
	} else {
		offscreen = 0;
	}

	// Calculate progress

	offset = $(window).scrollTop();

	if (offscreen !== 0) {
		progress = 100 - ((contentHeight - (offset + viewportHeight)) / offscreen) * 100;
	} else {
		// If there is nothing offscreen, avoid dividing by zero
		progress = 100;
	}

	// Fixes over-scrolling in rubber-banding browsers
	if (progress > 100) {
		progress = 100;
	}
	if (progress < 0) {
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
	$('#progress-js-generatedDiv').html(progress + "%");
	if (progress <= 50) {
		$('#progress-js-generatedDiv').css('color', 'red');
	} else {
		$('#progress-js-generatedDiv').css('color', 'green');
	}
}

function insertProgress() {

	var progressElement = "<div id='progress-js-generatedDiv'></div>";

	$('body').prepend(progressElement);

	$('#progress-js-generatedDiv').css('position', 'fixed')
		.css('top', '0')
		.css('left', '0')
		.css('padding', '20px')
		.css('font', "700 normal 23pt/1em 'Helvetica Neue', Helvetica, Arial, sans-serif")
		.css('text-shadow', '0 1px 3px rgba(255,255,255,0.7)');

}

$(document).ready(function () {
	// Run in page load
	insertProgress();
	setProgress();
	$(window).resize(function () {
		// Run if the window is resized
		setProgress();
	});
	$(window).scroll(function () {
		// Run if the user scrolls the page
		setProgress();
	});
});