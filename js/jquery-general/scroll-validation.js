$(document).ready(function() {
	// Validación para que cuando le de click a la flecha del slider lo lleve a la siguiente sección osea servicios, contacto, quiénes somos y soporte
	$('#arrow-down-slider').on('click', function() {
    $('html').animate({
      scrollTop: $('#section-services, #ctn-about-us, #ctn-support, #ctn-form-contact').offset().top
    }, 1000);
	});

 // Validación para que cuando den click a todos los href que tenga el numeral '#' lo lleve mediante el scroll a esa sección con animación y no se ensucie la url
	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault();
    $('html').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
	});

	// Validación para cuando le de click al botón de ir arriba y al botón del footer-mobil lo lleve a la posicion 0 del scroll
	$('#btn-go-to-up, #btn-go-to-up-footer').on('click', function() {
		$('html').animate({
			scrollTop: '0px'
		}, 1000);
	});

	let menu = $('#header'),
	    footerPc = $('#footer-pc').offset().top,
			footerMobil = $('#footer-mobil'),
			btnUp = $('#btn-go-to-up'),
			scrollZero = 0,
			win = $(window),
			winH = win.height();

  // Validación para detecte cuando esta scrolleando hacia abajo o arriba
  // Dependiendo hacia que dirección se haga scroll el menu se muestra o se oculta por medio de una clase
  win.on('load scroll', function() {
  	let positionScrollY = win.scrollTop();
  	if (positionScrollY < scrollZero) {
			menu.removeClass('scroll-down')
		}
		else {
			menu.addClass('scroll-down');
			// Si hace scroll hacia abajo y el menu esta abierto simula un click en el botón del menú para que este se cierre
			$('#enlaces').hasClass('active') ?	$('#btn-menu').trigger('click') : '';
		}

    scrollZero = positionScrollY;
    // Validación para que cuando el scroll este en la posicion 0 osea arriba se remueva la clase scroll-down para que así cargue bien la animacion del header
    positionScrollY == 0 ? menu.removeClass('scroll-down') : '';
  });

	win.on('load scroll resize', function() {
		// Validación para que cuando el usuario haga scroll valide si pasa de cierta posicion en este caso la posición es la variable "winH" = 100vh / 2.5
		// Si el scroll pasa de "winH" se le agrega una clase al header para cambiarle el bakckground
		// De lo contrario se elimina la clase para que vuelva al background que tenía
		$(this).scrollTop() > winH / 2.5 ? menu.addClass('menu-flex-no-slider') : menu.removeClass('menu-flex-no-slider');
	});

	win.on('load scroll resize', function() {
		if ($(this).scrollTop() > winH) {
			// Si el scroll pasa de "winH" el botón de ir arriba aparece
			btnUp.removeClass('hide-btn-go-to-up');
			// Si el scroll pasa de "winH" se le agrega una clase al footer del móbil para que aprezca con efecto de levantarse
			footerMobil.addClass('active-footer-mobil');
		}

		else {
			// Se oculte el contenedor de la paleta de temas
			$('#ctn-paletts-colors-footer-mobil').removeClass('active');
			// De lo contrario el botón de ir arriba se esconde
			btnUp.addClass('hide-btn-go-to-up');
			// De lo contrario se elimina la clase para que vuelva a desaparecer con el efecto de acostarse
			footerMobil.removeClass('active-footer-mobil');
		}

		if ( location.href.indexOf('contacto') > -1 ) {
			// Si el scroll se pasa antes de la imágen de contacto menos el tamaño de ella osea luego de que termina el formulario
			if ( $(window).scrollTop() < $('.img-contact').offset().top - $('.img-contact').height() ) {
				// Se oculte el contenedor de la paleta de temas
				$('#ctn-paletts-colors-footer-mobil').removeClass('active');
				$('#footer-mobil').removeClass('active-footer-mobil');
			}
		}

		// Validación para cuando el scroll pase de la posición del footer normal
		if ($(this).scrollTop() > footerPc ) {
			// Se oculte el contenedor de la paleta de temas
			$('#ctn-paletts-colors-footer-mobil').removeClass('active');
			// Si esta en el footer se elimina la clase para que vuelva a desaparecer con el efecto de acostarse el footer-mobil
			footerMobil.removeClass('active-footer-mobil');
		}
		
		// Validación para si el menu es el negro el reconocimiento del active sea distinto
		// Y se agregue una clase o se quite para por cascada cambiar el efecto de hover a los links del menu		
		if ($('#header').hasClass('menu-flex-no-slider')) {
			$('.links-menu').addClass('links-menu-no-slider');
			$('.links-menu-active').addClass('links-menu-active-no-slider');
			$('.links-menu-active-no-slider').removeClass('links-menu-active');
		}

		else {
			$('.links-menu').removeClass('links-menu-no-slider');
			$('.links-menu-active').removeClass('links-menu-active-no-slider');
			$('.links-menu-active-no-slider').addClass('links-menu-active');
		}
	});
});