<?php
	
	// Variable para el párrafo con la clase error
	$pErrorAbrir             = "<p class='white'>";
	
	// Variable para el párrafo con la clase error
	$pErrorCerrar            = "</p>";

	// Variables nombre de los campos de error
	$campoNombres            = 'El campo nombres';
	$campoCorreo             = 'El campo email';
	$campoTelefono           = 'El campo teléfono';
	$campoExtension          = 'El campo extensión';
	$campoMensaje            = 'El campo mensaje';

	// Variables de los mensajes de error
	$msnVacio                = 'esta vacío';
	$msnMinlength            = 'es demasiado corto';
	$msnMaxlength            = 'es demasiado largo';
	$msnMin                  = 'es menor que el adecuado';
	$msnMax                  = 'es mayor que el adecuado';
	$msnEmailInvalid         = 'debe ser un correo valido';
	$msnNumInvalid           = 'debe llevar números';
	$msnCaracteresEspeciales = "deber ir sin caracteres espciales como ([{(°|!#$%&:;/()¡<>ñ)}])";
	$msnCampos               = [$campoNombres, $campoCorreo, $campoTelefono, $campoExtension, $campoMensaje];

	// Validación del botón enviar del formulario de contacto
	if (isset($_POST['send_form_contact'])) {
		// Validaciones para cuando el campo esta vacío o si es demasiado corto
		if (empty($nombres))
		echo "$pErrorAbrir * $msnCampos[0] $msnVacio $pErrorCerrar";

		else if (strlen($nombres) < 2)
		echo "$pErrorAbrir * $msnCampos[0] $msnMinlength $pErrorCerrar";

		if (empty($correo))
		echo "$pErrorAbrir * $msnCampos[1] $msnVacio $pErrorCerrar";

		else if (strlen($correo) < 6)
		echo "$pErrorAbrir * $msnCampos[1] $msnMinlength $pErrorCerrar";

		if (strlen($telefono) < 7)
		echo "$pErrorAbrir * $msnCampos[2] $msnMinlength $pErrorCerrar";

		if (empty($mensaje))
		echo "$pErrorAbrir * $msnCampos[4] $msnVacio $pErrorCerrar";

		else if (strlen($mensaje) < 50)
		echo "$pErrorAbrir * $msnCampos[4] $msnMinlength $pErrorCerrar";

		// Validación para cuando el número es demasiado corto
		if ($telefono < 2000000)
		echo "$pErrorAbrir * $msnCampos[2] $msnMin $pErrorCerrar";

		// Validaciones para cuando el campo es demasiado largo
		if (strlen($nombres) > 100)
		echo "$pErrorAbrir * $msnCampos[0] $msnMaxlength $pErrorCerrar";

		if (strlen($correo) > 92)
		echo "$pErrorAbrir * $msnCampos[1] $msnMaxlength $pErrorCerrar";

		if (strlen($telefono) > 11)
		echo "$pErrorAbrir * $msnCampos[2] $msnMaxlength $pErrorCerrar";

		if (strlen($extension) > 10)
		echo "$pErrorAbrir * $msnCampos[3] $msnMaxlength $pErrorCerrar";

		if (strlen($mensaje) > 400)
		echo "$pErrorAbrir * $msnCampos[4] $msnMaxlength $pErrorCerrar";

		// Validación para cuando el número es demasiado largo
		if ($telefono > 35000000000)
		echo "$pErrorAbrir * $msnCampos[2] $msnMax $pErrorCerrar";

		if ($extension > 9999999999)
		echo "$pErrorAbrir * $msnCampos[3] $msnMax $pErrorCerrar";

		// Validación para cuando el campo llenado no es un número valido
		if (!is_numeric($telefono))
		echo "$pErrorAbrir * $msnCampos[2] $msnNumInvalid $pErrorCerrar";

		if (!is_numeric($extension))
		echo "$pErrorAbrir * $msnCampos[3] $msnNumInvalid $pErrorCerrar";

		// Validación para cuando el campo lleno tiene un caracteres especiales
		// if (!ereg("[a-zA-Z]", $nombres))
		// echo "$pErrorAbrir * $msnCampos[0] $msnCaracteresEspeciales $pErrorCerrar";

		// if (!ereg("[0-9]", $telefono))
		// echo "$pErrorAbrir * $msnCampos[2] $msnCaracteresEspeciales $pErrorCerrar";

		// if (!ereg("[0-9]", $extension))
		// echo "$pErrorAbrir * $msnCampos[3] $msnCaracteresEspeciales $pErrorCerrar";

		// if (!ereg("[a-zA-Z]", $mensaje))
		// echo "$pErrorAbrir * $msnCampos[4] $msnCaracteresEspeciales $pErrorCerrar";

		// Validación para cuando el campo llenado no es 
		if (!filter_var($nombres, FILTER_SANITIZE_STRING, FILTER_SANITIZE_MAGIC_QUOTES))
		echo "$pErrorAbrir $nombres $pErrorCerrar";

		if (!filter_var($telefono, FILTER_SANITIZE_NUMBER_INT))
		echo "$pErrorAbrir $telefono $pErrorCerrar";

		// if (!filter_var($extension, FILTER_SANITIZE_NUMBER_INT))
		// echo "$pErrorAbrir $extension $pErrorCerrar";

		// if (!filter_var($correo, FILTER_VALIDATE_EMAIL))
		// echo "$pErrorAbrir * $msnCampos[1] $msnEmailInvalid $pErrorCerrar";

		if (!filter_var($mensaje, FILTER_SANITIZE_STRING, FILTER_SANITIZE_MAGIC_QUOTES))
		echo "$pErrorAbrir $mensaje $pErrorCerrar";
	}