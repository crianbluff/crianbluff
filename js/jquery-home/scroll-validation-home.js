$(document).ready(function() {

	const sectionServices = $('#section-services').offset().top,
				ctnWelcome = $('#ctn-welcome').offset().top,
				linkMenuHome = $('#menu-link-home'),
				linkMenuServices =  $('#menu-link-services');

	$(window).on('load scroll resize', function () {
		// Validación para que dependiendo la posición del scroll, el link de servicios se active y el de home se desactive y viceversa si no se cumple
		if ($(this).scrollTop() < sectionServices) {
			linkMenuHome.addClass('links-menu-active-no-slider');
			linkMenuServices.removeClass('links-menu-active-no-slider');
		}

		else if ($(this).scrollTop() < ctnWelcome / 1.1) {
			linkMenuServices.addClass('links-menu-active-no-slider');
			linkMenuHome.removeClass('links-menu-active-no-slider');
		}

		else {
			linkMenuHome.addClass('links-menu-active-no-slider');
			linkMenuServices.removeClass('links-menu-active-no-slider');
		}
	});

});