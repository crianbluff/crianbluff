$(document).ready(function() {
	// Guardar el contenedor principal
	let containerSlider = $('#slider');

	// Guardar las secciones del slider
	let sectionSlider = containerSlider.find('.section-slider');

	// Guardar numero de secciones
	let sectionLength = sectionSlider.length;

	// Crear un contenedor interno
	containerSlider.wrapInner('<div class="relative-lt-zero display-table slider-inner" />');
	let containerInner = $('.slider-inner');

	// Definir el ancho del contenedor interno
	containerInner.css({
		'width': `${ 100 * sectionLength }%`
	});

	sectionSlider.css({
		'width': `${ 100 / sectionLength }%`
	});

	// Crear botones para avanzar y retroceder
	containerSlider.after('<i id="prev" class="fa fa-chevron-left white pointer absolute arrows prev" aria-hidden="true"></i>');
	containerSlider.after('<i id="next" class="fa fa-chevron-right white pointer absolute arrows next" aria-hidden="true"></i>');

	// Guardar los botones en variables
	let prev = $('#prev');
	let next = $('#next');

	// Envolver los botones
	next.add(prev).wrapAll('<div class="slider-nav" />');

	/* Crear la función para navegar entre los slides */
	// Indice para moverse entre los slides
	let indexSlider = 0;

	// Escribir la función para moverse
	function moveSlider() {
		indexSlider == 0 ? containerInner.css({ 'left': `${ 0 }%` }) : '';
		indexSlider > 0 ? containerInner.css({ 'left': `-${ 100 * indexSlider }%` }) : '';
	}

	// Validación para moverse a la siguiente imágen
	next.on('click', function moveNextSlider() {
		if (indexSlider < sectionLength - 1) {
			indexSlider++;
			moveSlider();
		}
	});

	// Validación para moverse a la anterior imágen
	prev.on('click', function movePrevSlider() {
		if (indexSlider > 0) {
			indexSlider--;
			moveSlider();
		}
	});

	// Ejecuta el slider automáticamente
	let autoSlider = setInterval(function moveAutoSlider() {
		// Si el menú esta de color negro o el slider tiene la clase stop-slider no sigue el slider en automático
		$('#slider').hasClass('stop-slider') ? clearInterval(autoSlider) : '';

		// En caso de que este posicionado en la 1ra imágen del slider se ejecuta automáticamente cada 5 segundos
		indexSlider < sectionLength -1 ? moveSlider(indexSlider++) : '';
	}, 5000);

	// Validación para cuando le den click al botón de la hamburguesa, los links del menu, al logo del menú, las flechas del slider y la flecha de la siguiente sección
	// Le agregue al slider la clase stop-slider así cuando se cumpla la condicional de la función moverAutomaticamenteSlider
	$('#btn-menu, .title-logo-menu, .links-menu, #arrow-down-slider, .arrows').on('click', function() {
		$('#slider').addClass('stop-slider');
	});

	// Validación para que cuando el scroll este en una posicón distinta a arriba osea a 0px el slider se detenga y deje de ser automático
	$(window).on('load scroll resize', function() {
		$(this).scrollTop() > 0 ? $('#slider').addClass('stop-slider') : '';
	});

	// Validacion para que con el gesto de dezlizar se pasen las imgs del slider
	let interactiveElements = $('#btn-menu, .title-logo-menu, .links-menu, #arrow-down-slider, .arrows');
	let active = 1;
	let tolerance = 100;
  
  function swipeScreen() {
  	$('#slider').on('mousedown touchstart', function(e) {
			$(this).addClass('stop-slider');
  		let touch = e.originalEvent.touches;
  		let start = touch ? touch[0].pageX : e.pageX;
  		let difference;

  		$(this).on('mousemove touchmove', function(e) {
  			let contact = e.originalEvent.touches;
  			end = contact ? contact[0].pageX : e.pageX;
  			difference = end - start;
  		});

			// On touch end
  		$(this).on('mouseup touchend', function(e) {
  			e.preventDefault();

  			// Swipe right
  			if (active < sectionLength && difference < -tolerance) {
  				next.trigger('click');
  				active += 1;
  			}

  			// Swipe left
  			if (active > 1 && difference > tolerance) {
  				prev.trigger('click');
  				active -= 1;
  			}

  			$(this).off('mousemove touchmove');
  		});
  	});
  }

  swipeScreen();

  // Prevent swipe on interactive elements
  interactiveElements.on('touchstart touchend touchup', function(e) {
  	e.stopPropagation();
  });
	
	// Eventos de teclado
	// Flecha derecha = 39
	// Flecha izquierda = 37
	// trigger es encadenar eventos, que un evento dispare otro
	$(document).on('keydown', function(e) {
		switch (e.which) {
			case 39:
			next.trigger('click');
			break;
			case 37:
			prev.trigger('click');	
			break;
		}
	});

});