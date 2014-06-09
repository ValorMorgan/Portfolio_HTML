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
	
	$('.link_home').click(function() {
		$('#b_content').empty();
		$('#b_content').load('resources/homepage.html');
	});
	$('.link_jobs').click(function() {
		$('#b_content').empty();
		$('#b_content').load('resources/homepage.html');
	});
	$('.link_languages').click(function() {
		$('#b_content').empty();
		$('#b_content').load('resources/homepage.html');
	});
	$('.link_resume').click(function() {
		$('#b_content').empty();
		$('#b_content').load('resources/homepage.html');
	});
});