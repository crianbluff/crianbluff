$(document).ready(function() {

	let header = $('#header');

	// Menu Responsive
	// Calculamos el ancho de la página
	let ancho = $(window).width(),
			enlaces = $('#enlaces'),
			btnMenu = $('#btn-menu');

	// Cuando le dan click al botón de la hamburguesa se alterna la clase active-hamburguer y se alterna la clase active
	btnMenu.on('click', function() {
		$(this).toggleClass('active-hamburguer');
		enlaces.toggleClass('active');
	});

	// Cuando hagan resize en la página si es el tamaño es 901 para adelante y los enlaces no tienen la clase active
	// Se agrega el icono de la hamburguesa y se quita el de la x, y se remueve la clase active de los enlaces osea se ocultan
	$(window).on('resize', function() {
    if ($(this).width() > 900 && !enlaces.hasClass('active')) {
			$('.hamburguer').addClass('fa-bars').removeClass('fa-times-circle');
			enlaces.removeClass('active');
		}				
  });
});