<!-- Scripts generales después de los scripts únicos de ese página -->
	<script src="./js/jquery-general/scroll-validation.js"></script>
	<script src="./js/jquery-general/hover-and-focus-validation.js"></script>

	<script>
		// Función que sera ejecutada cuando le den click en los botones de cerrar modal remueva la clase "show-modal" en los modales para que asi lo oculte
		function closeModal() {
			$('.modal').removeClass('show-modal');
			$('body').removeClass('no-scroll-y');
		}

		// Función que sera ejecutada al dar click en el icono de volver se va a alternar el giro la tarjeta
		function flipCard() {
			$('#card').toggleClass('flip');
		}

		const whatsappCreatorWeb = '+57 310 809 8793';
			
		// Función que sera ejecutada al dar click en el icono de whatsapp del modal "Creador de la web" 
		// Linkeado a compartir la url en la que se encuentra en whatsapp indicando el número de teléfono del creador
		function shareWhatsappCreatorWeb() {
			open(`https://api.whatsapp.com/send?text=Whatsapp del creador de la web ${ location.pathname } ${ whatsappCreatorWeb }`);
		}
	</script>