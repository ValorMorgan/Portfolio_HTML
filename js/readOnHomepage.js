$(document).ready(function(){
	$('#hpg_rec_more').hide();
	$('#hpg_hob_more').hide();
	var rec_visible = 0;
	var hob_visible = 0;
	
	$('.rec_more').click(function(evt) {
		evt.preventDefault();
		if(rec_visible === 0) {
			$('#hpg_rec_more').slideDown(500, function() {
				$('#hpg_rec_more').show();
			});
			$('.rec_more').text('Show less...');
			rec_visible = 1;
		} else {
			$('#hpg_rec_more').slideUp(500, function() {
				$('#hpg_rec_more').hide();
			});
			$('.rec_more').text('Read more...');
			rec_visible = 0;
		}
	});
	
	$('.hob_more').click(function(evt) {
		evt.preventDefault();
		if(hob_visible === 0) {
			$('#hpg_hob_more').slideDown(500, function() {
				$('#hpg_hob_more').show();
			});
			$('.hob_more').text('Show less...');
			hob_visible = 1;
		} else {
			$('#hpg_hob_more').slideUp(500, function() {
				$('#hpg_hob_more').hide();
			});
			$('.hob_more').text('Read more...');
			hob_visible = 0;
		}
	});
});