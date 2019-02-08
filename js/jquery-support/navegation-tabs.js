$(document).ready(function() {
	
	$('.ctn-icons-tabs').on('click', function() {
		$(this).addClass('active').siblings('.ctn-icons-tabs').removeClass('active');
		$('.ctn-tabs-contents-item').eq($(this).index()).removeClass('hide').siblings('.ctn-tabs-contents-item').addClass('hide');
	});
	
});