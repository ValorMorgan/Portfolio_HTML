var curPage = 0;



$(document).ready(function(){
	$('#b_content').load('resources/homepage.html');
    $('footer').load('resources/footer.html');
	
	// Failed "disable middle click"
	$("body").on('click', function(e) { 
	   if( e.which === 2 ) {
		  e.preventDefault();
	   }
	});
	
	var open = true;
	$('#f_slideButton').click(function() {
        if(open === false) { // open it
            $('#f_container').animate({ height:"180px" });
			$('#b_sidebar').animate({ bottom:"180px" });
			$('#f_slideButton').animate({ bottom:"185px" });
			$('footer').show();
			$('#b_bgDisplay').animate({ marginBottom:"200px" });
			$("html, body").animate({ scrollTop: $(document).height() }, 500);
            open = true;
	    } else { // close it
			$('#f_container').animate({ height:"0px", Bottom:"-1px" });
            $('footer').slideUp(500, function() {
				$('footer').hide();
			});
			$('#b_sidebar').animate({ bottom:"0px" });
			$('#f_slideButton').animate({ bottom:"5px" });
			$('#b_bgDisplay').animate({ marginBottom:"20px" });
	        open = false;
	    }
	});
	
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
	
	$('.link_home').click(function(evt) {
		evt.preventDefault();
		changePage(0);
	});
	$('.link_jobs').click(function(evt) {
		evt.preventDefault();
		changePage(1);
	});
	$('.link_languages').click(function(evt) {
		evt.preventDefault();
		changePage(2);
	});
	$('.link_resume').click(function(evt) {
		evt.preventDefault();
		changePage(3);
	});
});

/* pageID values
 * 0 = homepage
 * 1 = jobs
 * 2 = languages
 * 3 = resume
 * 4 = proj_cse335
 * 5 = proj_campusTraffic
 */
var changePage = function(pageID) {
	if(curPage != pageID) {
		$('#b_content').empty();
		curPage = pageID;
		
		switch (curPage) {
			case 0:
				$('#b_content').load('resources/homepage.html');
				break;
				
			case 1:
				$('#b_content').load('resources/jobs.html');
				break;
				
			case 2:
				$('#b_content').load('resources/languages.html');
				break;
				
			case 3:
				$('#b_content').load('resources/homepage.html');
				break;
				
			case 4:
				$('#b_content').load('resources/projects/cse335.html');
				break;
		}
	}
};