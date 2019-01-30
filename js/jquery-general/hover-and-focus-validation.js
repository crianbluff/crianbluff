$(document).ready(function() {
	// Validación para cunado le dan click a los links al que le de click no se quede con el focus marcado
	$('a, button').on('click', function() {
		$(this).blur();
	});
	
	// Escribe en la sección de copyright el año actual
	let yearCurrent = new Date().getFullYear();
	$('#current-year').text(yearCurrent);

	// Efecto del footer-mobile, icono plus y botón del icono plus, cuando se da click en el botón plus y se reproduce un sonido
	const soundFooterMobil = new Audio('./media/sounds/sound-footer-mobile/sound-footer-mobile.mp3');
	$('#footer-mobile-btn-plus-no-expand').on('click', function() {
		$(this).toggleClass('footer-mobile-btn-plus-expand');
		$('#icon-close-footer-mobile').toggleClass('rotate-icon-plus');
		$('#footer-mobil').toggleClass('hide-footer-mobile');
		soundFooterMobil.play();

		// Si le dan click al boton del footer mobile para cerrarlo se oculte el contenedor de la paleta de temas
		$('#footer-mobile-btn-plus-no-expand').hasClass('footer-mobile-btn-plus-expand') ? $('#ctn-paletts-colors-footer-mobil').removeClass('active') : '';
	});

	// Validación si le dan click al icono de cambiar tema aparezca la burbuja con las paletas de colores que hay
	$('#ctn-icon-palette-colors').on('click', function() {
		$('#ctn-paletts-colors').toggleClass('active');
	});

	// Validación si le dan click a las paletas de color se cierra la burbuja que las contiene
	$('.paletts-colors').on('click', function() {
		$(this).parent('#ctn-paletts-colors').removeClass('active');
	});

	// Validación si le dan click al icono de cambiar tema en footer mobile aparezca la burbuja con las paletas de colores que hay
	$('#icon-palette-colors-footer-mobil').on('click', function() {
		$('#ctn-paletts-colors-footer-mobil').toggleClass('active');
	});

	// Validación si le dan click a las paletas de color se cierra la burbuja que las contiene footer-mobil
	$('.paletts-colors-footer-mobil').on('click', function() {
		$(this).parent('#ctn-paletts-colors-footer-mobil').removeClass('active');
	});
	
	
	$('#accept-theme').on('click', function() {
		let themes = ['themeNight', 'themeDark', 'themeLight'];

		for ( theme of themes ) {
			localStorage.removeItem(theme);
		}

		$('.theme-selected').attr('data-palette-color') == 'noche' ? localStorage.setItem(themes[0], true) : '';		
		$('.theme-selected').attr('data-palette-color') == 'oscuro' ? localStorage.setItem(themes[1], true) : '';		
		$('.theme-selected').attr('data-palette-color') == 'dia' ? localStorage.setItem(themes[2], true) : '';
	});
	
	// Condicional si la key del tema noche se encuentra en valor 'true', se agrega la clase 'theme-night' en el body
	// Y se remueve la clase 'theme-dark'
	localStorage.getItem('themeNight') == 'true' ? $('body').removeClass('theme-dark').addClass('theme-night') : '';
	// Condicional si la key del tema oscuro se encuentra en valor 'true', se agrega la clase 'theme-dark' en el body
	// Y se remueve la clase 'theme-night'
	localStorage.getItem('themeDark') == 'true' ? $('body').removeClass('theme-night').addClass('theme-dark') : '';
	// Condicional si la key del tema día se encuentra en valor 'true', se remueven las clases 'theme-night y theme-dark' del body
	localStorage.getItem('themeLight') == 'true' ? $('body').removeClass('theme-night theme-dark') : '';

});