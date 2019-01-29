$(document).ready(function() {

	// La variable "urlHome" significa la url del inicio de la página web
	const urlHome = 'https://crianbluff.github.io/crianbluff';

	// La variable time significa para calcular el tiempo en las condicionales de agregar o quitar las hojas de estilo del tema oscuro
	let time = new Date();

	// Validación si le dan click a la paleta de color noche se agregue la clase 'theme-night' en el body
	// Y se remueva la clase 'theme-dark'
	$('.palette-color-night').on('click', function() {
		$('body').removeClass('theme-dark').addClass('theme-night');
	});

	// Validación si le dan click a la paleta de color oscuro se agregue la clase 'theme-dark' en el body
	// Y se remueva la clase 'theme-night'
	$('.palette-color-dark').on('click', function() {
		$('body').removeClass('theme-night').addClass('theme-dark');
	});

	// Validación si le dan click a la paleta de color día se remueve la clase 'theme-night y theme-dark' del body
	$('.palette-color-light').on('click', function() {
		$('body').removeClass('theme-night theme-dark');
	});	

	// Validación en caso de que sean las 18:00 pm hasta las 05:59 am se agrega la clase 'theme-night' en el body
	// Si es mayor o igual a 18 osea 06:00 pm se agrega la clase 'theme-night' en el body
	if (time.getHours() >= 18) {
		$('body').addClass('theme-night');
	}

	// Si son las 06:00 am hasta las 17:59 se remueve la clase 'theme-night' del body
	// Si es mayor o igual a 6 osea 06:00 am se remueve la clase 'theme-night' del body
	else if (time.getHours() >= 6) {
		$('body').removeClass('theme-night');
	}

	// De lo contrario que no se cumpla ninguna de las anteriores condiciones se agrega la clase 'theme-night' en el body
	// Ya que seria para el rango de horas 01:00 am hasta las 05:00 am que son las horas que no estan cogiendo las condiciones anteriores
	else {
		$('body').addClass('theme-night');
	}

	// Recorre todas las etiquetas 'a' que vayan dentro del menú y las que coincidan con el href con la url le grega una clase para que resalte
	$('#enlaces a').each(function() {
		location.pathname.indexOf( $(this).attr('href') ) > -1 ? $(this).addClass('links-menu-active') : '';
	});

	if (location.href.indexOf('quienes-somos') > -1) {
		// Validación para cambiar las imágnes del slider dependiendo la página en la que este y también el texto
		$('.slider-one').addClass('slider-one-about-us').removeClass('slider-one').children('.title-slider').text('Planteamos excelentes soluciones');
		$('.slider-two').addClass('slider-two-about-us').removeClass('slider-two').children('.title-slider').text('Somos un equipo');
		$('.slider-three').addClass('slider-three-about-us').removeClass('slider-three').children('.title-slider').text('Aprender del pasado');
		$('.slider-four').addClass('slider-four-about-us').removeClass('slider-four').children('.title-slider').text('Nos esforzamos en ser los mejores');
		$('.slider-five').addClass('slider-five-about-us').removeClass('slider-five').children('.title-slider').text('Únete a nosotros');
	}

	if (location.href.indexOf('soporte') > -1) {
		// Validación para cambiar las imágnes del slider dependiendo la página en la que este y también el texto
		$('.slider-one').addClass('slider-one-support').removeClass('slider-one').children('.title-slider').text('Soporte');
		$('.slider-two').addClass('slider-two-support').removeClass('slider-two').children('.title-slider').text('Ofrecemos soporte a quien lo necesite');
		$('.slider-three').addClass('slider-three-support').removeClass('slider-three').children('.title-slider').text('Le ofrecemos el mejor asesoramiento');
		$('.slider-four').addClass('slider-four-support').removeClass('slider-four').children('.title-slider').text('Estamos para asesorarte');
		$('.slider-five').addClass('slider-five-support').removeClass('slider-five').children('.title-slider').text('Estamos a su disposición');
	}

	if (location.href.indexOf('contacto') > -1) {
		// Validación para cambiar las imágnes del slider dependiendo la página en la que este y también el texto
		$('.slider-one').addClass('slider-one-contact').removeClass('slider-one').children('.title-slider').text('No dudes en llamarnos');
		$('.slider-two').addClass('slider-two-contact').removeClass('slider-two').children('.title-slider').text('Somos los mejores en ayudar');
		$('.slider-three').addClass('slider-three-contact').removeClass('slider-three').children('.title-slider').text('Completa el formulario de contacto');
		$('.slider-four').addClass('slider-four-contact').removeClass('slider-four').children('.title-slider').text('Cualquier duda cuenta con nosotros');
		$('.slider-five').addClass('slider-five-contact').removeClass('slider-five').children('.title-slider').text('No dudes en contactarnos');
	}

	// Si se encuentra en el index o en la url que lleva al home se marque el link de inicio
	location.href.indexOf('index') > -1 || location == urlHome ? $('#menu-link-home').addClass('links-menu-active') : '';

	// Validación para cuando le den click estando en otra pagina que no sea la de inicio lo linkee a la sección servicios del footer pc
	// De lo contrario lo lleve a la sección de servicios
	$('#menu-link-services').on('click', function() {
		// Verifica si existe la palabra index en la url o si esta la url exacta
		if (location.href.indexOf('index') > -1 || location == urlHome) {
			$('html').animate({
      	scrollTop: $('#section-services').offset().top
    	}, 1000);
		}

		// De lo contrario lo lleva al footer-pc y se agregue la clase highlight-services-footer-pc a la sección de servicios en el footer-pc
		else {
			$('.links-services-footer-pc').addClass('highlight-services-footer-pc');
			$('html').animate({
				scrollTop: $('#col-footer-pc-services').offset().top
			}, 1000);
		}

		// Validación cuando la clase highlight-services-footer-pc termine la animación se elimine la clase que le da la animación
    $('.links-services-footer-pc').on('animationend', function() {
			$('.links-services-footer-pc').removeClass('highlight-services-footer-pc');
    });
	});

	// Linkeado para compartir en redes sociales la url en la que se encuentran, la variable "urlThis" significa, la url en la que se encuentra
	const urlThis = location.pathname;

	// Linkeado a compartir la url en la que se encuentra en facebook
	$('#share-facebook').on('click', function() {
		open(`https://www.facebook.com/sharer/sharer.php?u=${ urlThis }`);
	});

	// Linkeado a compartir la url en la que se encuentra en twitter
	$('#share-twitter').on('click', function() {
		open(`https://twitter.com/?status=Me gusta esta p\u00E1gina web ${ urlThis }`);
	});

	// Linkeado a compartir la url en la que se encuentra en whatsapp
	$('.share-whatsapp').on('click', function() {
		open(`https://api.whatsapp.com/send?text=${ urlThis }`);
	});

	// Linkeado a compartir la url en la que se encuentra en google plus
	$('#share-google-plus').on('click', function() {
		open(`https://plus.google.com/share?url=${ urlThis }`);
	});

});