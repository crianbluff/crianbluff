$(document).ready(function () {

	// Validación del botón enviar del formulario de contacto
	$('#send_form_contact').on('submit click', function() {
		// La variable expr es para validar el formulario que solo reciba estos caracteres
		const expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		const letras = 'áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
		
		// Variables para capturar el valor de los inputs y textarea del formulario de contacto
		const formContactNombres      = $('#nombre_contacto').val();
		const formContactCorreo       = $('#email_contacto').val();
		const formContactTelefono     = $('#tel_contacto').val();
		const formContactExtension    = $('#ext_contacto').val();
		const formContactMensaje      = $('#mensaje_contacto').val();

		// Variables para capturar el id de cada errror de los campos del formulario de contacto
		const errorCampoNombres       = $('#field-names');
		const errorCampoCorreo        = $('#field-email');
		const errorCampoTelefono      = $('#field-tel');
		const errorCampoExtension     = $('#field-ext');
		const errorCampoMensaje       = $('#field-comments');

		// Variables nombre de los campos de error
		const campoNombres            = '* El campo nombres ';
		const campoCorreo             = '* El campo email ';
		const campoTelefono           = '* El campo teléfono ';
		const campoExtension          = '* El campo extensión ';
		const campoMensaje            = '* El campo mensaje ';

		// Variables de los mensajes de error
		const msnVacio                = 'esta vacío';
		const msnMinlength            = 'es demasiado corto';
		const msnMaxlength            = 'es demasiado largo';
		const msnMin                  = 'es menor que el adecuado';
		const msnMax                  = 'es mayor que el adecuado';
		const msnEmailInvalid         = 'debe ser un correo valido';
		const msnNumInvalid           = 'debe llevar números';
		const msnCaracteresEspeciales = 'deber ir sin caracteres espciales como ([{(°|!#$%&:;/()¡<>ñ)}])';
		const msnCampos               = [campoNombres, campoCorreo, campoTelefono, campoExtension, campoMensaje];

		// Validaciones para cuando el campo esta vacío o si es demasiado corto
		if (formContactNombres === '')
		errorCampoNombres.text(msnCampos[0].concat(msnVacio));

		else if (formContactNombres.length < 2)
		errorCampoNombres.text(msnCampos[0].concat(msnMinlength));

		if (formContactCorreo === '')
		errorCampoCorreo.text(msnCampos[1].concat(msnVacio));

		else if (formContactCorreo.length < 6)
		errorCampoCorreo.text(msnCampos[1].concat(msnMinlength));
		
		if (formContactTelefono.length < 7)
		errorCampoTelefono.text(msnCampos[2].concat(msnMinlength));

		if (formContactMensaje === '')
		errorCampoMensaje.text(msnCampos[4].concat(msnVacio));

		else if (formContactMensaje.length < 50)
		errorCampoMensaje.text(msnCampos[4].concat(msnMinlength));

		// Validación para cuando el número es demasiado corto
		if (formContactTelefono < 2000000)
		errorCampoTelefono.text(msnCampos[2].concat(msnMin));

		// Validaciones para cuando el campo es demasiado largo
		if (formContactNombres.length > 100)
		errorCampoNombres.text(msnCampos[0].concat(msnMaxlength));

		if (formContactCorreo.length > 92)
		errorCampoCorreo.text(msnCampos[1].concat(msnMaxlength));

		if (formContactTelefono.length > 11)
		errorCampoTelefono.text(msnCampos[2].concat(msnMaxlength));

		if (formContactExtension.length > 10)
		errorCampoExtension.text(msnCampos[3].concat(msnMaxlength));

		if (formContactMensaje.length > 400)
		errorCampoMensaje.text(msnCampos[4].concat(msnMaxlength));

		// Validación para cuando el número es demasiado largo
		if (formContactTelefono > 35000000000)
		errorCampoTelefono.text(msnCampos[2].concat(msnMax));

		if (formContactExtension > 9999999999)
		errorCampoExtension.text(msnCampos[3].concat(msnMax));

		// Validación para cuando no es un correo valido
		if (!expr.test(formContactCorreo))
		errorCampoCorreo.text(msnCampos[1].concat(msnEmailInvalid));

		// Validación para cuando no lleva números
		if (isNaN(formContactTelefono))
		errorCampoTelefono.text(msnCampos[2].concat(msnNumInvalid));

		if (isNaN(formContactExtension))
		errorCampoExtension.text(msnCampos[3].concat(msnNumInvalid));
	});

	// Validación para cuando le den click a la "x" del mensaje correcto del formualario de contacto se desvanezca el mensaje
	// Y se elimine el mensaje 2 milisegundos después de que se desvanezca
	$('#btn-close-form-correct').on('click', function() {
		$(this).parent('.ctn-title-btn-close-form-correct').parent('.form-correct').fadeOut(500);
		$(this).parent('.ctn-title-btn-close-form-correct').parent('.form-correct').delay(700).queue(function() {
			$(this).remove();
		});
	});

});