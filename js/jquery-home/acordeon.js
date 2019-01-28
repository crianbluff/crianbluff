$(document).ready(function() {

	$('.ctn-title-content-acordeon').on('click', function() {
		$(this).children('.icon-acordeon').toggleClass('rotate-icon-acordeon');
		$(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.icon-acordeon').removeClass('rotate-icon-acordeon');
		$(this).next().slideToggle(500);
		$(this).parent('.ctn-acordeon').siblings('.ctn-acordeon').find('.ctn-content-acordeon').slideUp(500);
	});

});