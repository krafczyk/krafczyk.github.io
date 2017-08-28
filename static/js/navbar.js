$(document).ready(function() {
	$(window).scroll(function() {
		//console.log($(window).scrollTop());

		if ($(window).scrollTop() > 10) {
			console.log("scroll");
			$('#sticky').addClass("navtopsticky");
		} else {
			console.log("not scroll");
			$('#sticky').removeClass("navtopsticky");
		}
	});
});
