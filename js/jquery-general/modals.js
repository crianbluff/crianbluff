$(document).ready(function() {

  // Cuando le dan click a cualquier de los modales y body se le agrega la clase "no-scroll-y" para que no se le pueda hacer scroll a la página
  // Se remueve la clase highlight-services-footer-pc para que se quite la animación en el footer-pc en los servicios
  // Y se reproduce un sonido
  const soundModal = new Audio('./media/sounds/sound-modals/sound-modals.mp3');
	$('.link-modal, .paletts-colors, .paletts-colors-footer-mobil').on('click', function() {
		$('body').addClass('no-scroll-y');
		$('.links-services-footer-pc').removeClass('highlight-services-footer-pc');
		soundModal.play();
	});

	// Cuando den click en los que tienen la clase link-modal capture el texto del atributo data-modal y lo guarde en una variable temporal que es el id del modal a agregarle la clase para mostrarlo
	$('.link-modal').on('click', function() {
		let temp = $($(this).attr('data-modal'));
		temp.addClass('show-modal');
	});

	// Al dar click en el icono de volver se va a alternar el giro la tarjeta
	$('.icon-flip').on('click', function() {
		$('#card').toggleClass('flip');	
	});

	// Cuando den click en los que tienen la clase btn-close-modal, btn-close-modal-footer y el de aceptar y denegar en el de modal de tema eterno capture el texto del atributo data-modal y lo guarde en una variable temporal que es el id del modal a removerle la clase para ocultarlo
	$('.btn-close-modal, .btn-close-footer-modal, .btns-modal-themes').on('click', function() {
		let temp = $($(this).attr('data-modal'));
		temp.removeClass('show-modal');
		$('body').removeClass('no-scroll-y');
	});

	// Función que sera ejecutada cuando se oprime el botón escape
	function closeModal() {
		$('body').removeClass('no-scroll-y');
		$('.modal').removeClass('show-modal');
	}

	// Sirve para cuando le den click por fuera del modal se cierre el modal al que le dieron por fuera
	$('.modal').on('click', function() {
		let temp = $(this);
		temp.removeClass('show-modal');
		$('body').removeClass('no-scroll-y');
	});

	// Cuando le dan click dentro del modal evita que se propage el evento que lo cierra al darle por fuera
	$('.ctn-modal').on('click', function(e) {
		e.stopPropagation();
	});

	// Cuando dan click en las paletas de colores captura el texto que esta en el atributo data-palette-color, luego inserta esa palabra capturada en el título y la pregunta del modal de temas
	$('.paletts-colors, .paletts-colors-footer-mobil').on('click', function() {
		let captureWord = $(this).attr('data-palette-color');
		$('.theme-selected').text(captureWord);
		$('.theme-selected').attr('data-palette-color', captureWord);
	});

	// Si le da la tecla Escape cierra el modal
	// Escape = 27
	$(document).on('keydown keyup', function(e) {
		e.which == 27 ? closeModal() : '';
	});

	// Constante número de celular del creador de la web
	const whatsappCreatorWeb = '+57 310 809 8793';

	// Al dar click en el icono de whatsapp del modal "Creador de la web" 
	// Linkeado a compartir la url en la que se encuentra en whatsapp indicando el número de teléfono del creador
	$('.share-whatsapp-creator').on('click', function() {
		open(`https://api.whatsapp.com/send?text=Whatsapp del creador de la web ${ location.href } ${ whatsappCreatorWeb }`);
	});

});