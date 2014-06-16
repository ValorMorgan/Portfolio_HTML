/** Smooth Scrolling Function
 * How to use
 * <div name="top"> </div>
 * <p>somethings</p>
 * <a href="#top"> Go to top </a>
 */

$(document).ready(function(){
	$('a[href*=#]:not([href=#])').click(function() {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	});
});