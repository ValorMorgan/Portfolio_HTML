$(document).ready(function(){
	$('.link_proj_cse335').click(function(evt) {
		evt.preventDefault();
		parent.changePage(4);
	});
	$('.link_proj_campustraffic').click(function(evt) {
		evt.preventDefault();
		parent.changePage(5);
	});
});