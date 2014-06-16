$(document).ready(function(){
	$('#b_content').load('resources/homepage.html');
    $('footer').load('resources/footer.html');
	
	var open = true;
	$('#f_slideButton').click(function() {
        if(open === false) { // open it
            
			$('#b_sidebar').animate({ bottom:"180px" });
			$('#f_slideButton').animate({ bottom:"185px" });
			$('#f_container').slideDown(500, function() {
				$('#f_container').animate({ height:"180px" });
				$('footer').show();
			});
            open = true;
	    } else { // close it
            $('footer').slideUp(500, function() {
				$('#f_container').animate({ height:"0px" });
				$('footer').hide();
			});
			$('#b_sidebar').animate({ bottom:"0px" });
			$('#f_slideButton').animate({ bottom:"5px" });
			
	        open = false;
	    }
	});
	/*$('#f_slideButton').click(function() {
        if(open === false) { // open it
            $('#f_container').animate({ height:"180px" });
			$('#b_sidebar').animate({ bottom:"180px" });
			$('#f_slideButton').animate({ bottom:"185px" });
			$('footer').show();
            open = true;
	    } else { // close it
            $('#f_container').animate({ height:"0px" });
			$('#b_sidebar').animate({ bottom:"0px" });
			$('#f_slideButton').animate({ bottom:"5px" });
			$('footer').hide();
	        open = false;
	    }
	});*/
	
	/* Smooth Scrolling Function */
	/* How to use */
	/* <div name="top"> </div>
	 * <p>somethings</p>
	 * <a href="#top"> Go to top </a>
	 */
	$('a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html,body').animate({
          			scrollTop: target.offset().top
        		}, 1000);
        		return false;
      		}
    	}
	});
	
	/* curPage values
	 * 0 = homepage
	 * 1 = jobs
	 * 2 = languages
	 * 3 = resume
	 */
	var curPage = 0;
	$('.link_home').click(function(evt) {
		evt.preventDefault();
		if(curPage !== 0) {
			$('#b_content').empty();
			$('#b_content').load('resources/homepage.html');
			curPage = 0;
		}
	});
	$('.link_jobs').click(function(evt) {
		evt.preventDefault();
		if(curPage !== 1) {
			$('#b_content').empty();
			$('#b_content').load('resources/jobs.html');
			curPage = 1;
		}
	});
	$('.link_languages').click(function(evt) {
		evt.preventDefault();
		if(curPage !== 2) {
			$('#b_content').empty();
			$('#b_content').load('resources/languages.html');
			curPage = 2;
		}
	});
	$('.link_resume').click(function(evt) {
		evt.preventDefault();
		if(curPage !== 3) {
			$('#b_content').empty();
			$('#b_content').load('resources/homepage.html');
			curPage = 3;
		}
	});
});