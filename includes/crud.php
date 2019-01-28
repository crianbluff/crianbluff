<?php
	!isset($_POST) ? die('Acceso denegado') : '';

	require 'connect-database.php';

	$db = new Conexion();

	// Insertar datos del cliente en la tabla clientes
	if ( isset($_POST['send_form_contact']) ) {
		$id_co     		= $_POST['id_contacto'];
		$nombre_co 		= $_POST['nombre_contacto'];
		$email_co		  = $_POST['email_contacto'];
		$tel_co 	    = $_POST['tel_contacto'];
    $ext_co       = $_POST['ext_contacto'];
		$mensaje_co   = $_POST['mensaje_contacto'];

		settype($id_co, 'integer');

		$query_insert_co = "INSERT INTO `crianbluff_contacto`
		( `nombre_contacto`, `email_contacto`, tel_contacto, ext_contacto, `mensaje_contacto` )
		VALUES ( '$nombre_co', '$email_co', $tel_co, $ext_co, '$mensaje_co' )";
		$result_insert_co = $db->query($query_insert_co);

		if ( $db->affected_rows < 0 ) {
			header("location: ../contacto.php?error=Hubo un problema");
		}
		else {
			header("location: ../contacto.php");
		}
	}

?>