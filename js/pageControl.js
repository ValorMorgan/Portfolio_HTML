$(document).ready(function(){
	$('#b_content').load('resources/homepage.html');
    $('footer').load('resources/footer.html');
	
	var open = true;
	$('#f_slideButton').click(function() {
        if(open === false) { // open it
            $('#f_container').animate({ height:"180px" });
			$('#b_sidebar').animate({ bottom:"180px" });
			$('footer').show();
            open = true;
	    } else { // close it
            $('#f_container').animate({ height:"0px" });
			$('#b_sidebar').animate({ bottom:"0px" });
			$('footer').hide();
	        open = false;
	    }
	});
	
	/* curPage values
	 * 0 = homepage
	 * 1 = jobs
	 * 2 = languages
	 * 3 = resume
	 */
	var curPage = 0;
	$('.link_home').click(function() {
		if(curPage !== 0) {
			$('#b_content').empty();
			$('#b_content').load('resources/homepage.html');
			curPage = 0;
		}
	});
	$('.link_jobs').click(function() {
		if(curPage !== 1) {
			$('#b_content').empty();
			$('#b_content').load('resources/jobs.html');
			curPage = 1;
		}
	});
	$('.link_languages').click(function() {
		if(curPage !== 2) {
			$('#b_content').empty();
			$('#b_content').load('resources/homepage.html');
			curPage = 2;
		}
	});
	$('.link_resume').click(function() {
		if(curPage !== 3) {
			$('#b_content').empty();
			$('#b_content').load('resources/homepage.html');
			curPage = 3;
		}
	});
});