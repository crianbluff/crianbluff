<!DOCTYPE html>
<html lang="es">
	<head>
		<?php include('includes/metas-general-before.php'); ?>
		<!-- Metas property, etc únicas de esa web -->
		<meta name="apple-mobile-web-app-title" content="Crianbluff | Contacto">
		<meta property="og:title" content="Crianbluff | Contacto">
		<meta property="twitter:title" content="Crianbluff | Contacto">
		<meta property="og:url" content="https://crianbluff.com/contacto.php">
		<?php include('includes/metas-general-after.php'); ?>
			<title>
			  Crianbluff | Contacto
			</title>
		<?php include('includes/links-styles-general-before.php'); ?>
		<!-- Estilos únicos de la web contacto -->
		<link rel="stylesheet" href="css/styles-contact/contact.css">
		<?php include('includes/links-styles-general-after.php'); ?>
	</head>

	<body class="no-scroll-y">
		
		<?php include('includes/preloader.php'); ?>

		<?php include('includes/menu-flex.php'); ?>

		<?php include('includes/slider.php'); ?>
		
		<!-- Formulario de contacto e imágen -->
		<section>
			<div id="ctn-form-contact" class="no-select ctn-form-contact">
				<div class="display-table margin-auto">
					<div class="col-md-6 col-sm-12 col-xs-12">
						<!-- Caja correcta se lleno todo de manera correcta -->
 						<div class="form-correct">
 							<div class="flex one-hundred-porcent ctn-title-btn-close-form-correct">
 								<h3 class="title-form-correct">
 									Correo Enviado Satisfactoriamente!
 								</h3>

 								<button id="btn-close-form-correct" class="txt-center btn-close-form-correct">
 									<i class="fa fa-times-circle" aria-hidden="true"></i>
 								</button>
 							</div>

 							<p class="lh-25 content-form-correct">
 								Gracias
 								<span class="bold">
 									Cristian
 								</span>
 								por usar nuestro formulario de contacto!
 							</p>

 							<p class="lh-25 content-form-correct">
 								Su correo fue enviado correctamnete y estaremos en contacto con usted.
 							</p>
 						</div>

						<form action="https://formspree.io/crianbluff77@gmail.com" method="post" id="form-contact" class="form-contact" autocomplete="off" accept-charset="utf-8">
							<h3 class="gray-dark txt-center title-form-contact">
							  Por favor, utilice el siguiente formulario para contactarnos:
							</h3>

							<div class="relative ctn-inputs">
								<label for="nombre_contacto" class="support-text-form-contact absolute">
								  Nombre (Requerido al menos 2 caracteres)
								</label>

								<input type="text" name="nombre_contacto" id="nombre_contacto" pattern="[a-zA-Z]{2,100}" class="bgcolor-transparent show one-hundred-porcent effect-input" minlength="2" maxlength="100" autocomplete="off" required="required">
								<span class="before show bar-input-effect">
									<i class="fa fa-times gray pointer hide absolute clear-input-icon" aria-hidden="true"></i>
								</span>
								<p id="field-names" class="inline-block relative error-input-form-contact"></p>
							</div>
					
							<div class="relative ctn-inputs">
								<label for="email_contacto" class="support-text-form-contact absolute">
								  Email (Requerido)
								</label>

								<input type="email" name="email_contacto" id="email_contacto" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="bgcolor-transparent show one-hundred-porcent effect-input" minlength="5" maxlength="92" autocomplete="off" required="required">
								<span class="before show bar-input-effect">
									<i class="fa fa-times gray pointer hide absolute clear-input-icon" aria-hidden="true"></i>
								</span>
								<p id="field-email" class="inline-block relative error-input-form-contact"></p>
							</div>
					
							<div class="inline-block relative ctn-inputs ctn-middle">
								<label for="tel_contacto" class="support-text-form-contact absolute">
								  Teléfono (Opcional)
								</label>

								<input type="tel" name="tel_contacto" id="tel_contacto" pattern="[0-9]{7,11}" class="bgcolor-transparent inline-block one-hundred-porcent effect-input" min="2000000" max="3500000000" minlength="7" maxlength="11" autocomplete="off">
								<span class="before show bar-input-effect">
									<i class="fa fa-times gray pointer hide absolute clear-input-icon" aria-hidden="true"></i>
								</span>
								<p id="field-tel" class="inline-block relative error-input-form-contact"></p>
							</div>
					
							<div class="inline-block relative ctn-inputs ctn-middle">
								<label for="ext_contacto" class="support-text-form-contact absolute">
								  Extensión (Opcional)
								</label>

								<input type="num" name="ext_contacto" id="ext_contacto" pattern="[0-9]{1,10}" class="bgcolor-transparent inline-block one-hundred-porcent effect-input" min="0" max="9999999999" minlength="1" maxlength="10" autocomplete="off">
								<span class="before show bar-input-effect">
									<i class="fa fa-times gray pointer hide absolute clear-input-icon" aria-hidden="true"></i>
								</span>
								<p id="field-ext" class="inline-block relative error-input-form-contact"></p>
							</div>
					
							<div class="relative ctn-inputs">
								<label for="mensaje_contacto" class="support-text-form-contact absolute">
								  Sus comentarios (Requerido)
								</label>

								<textarea name="mensaje_contacto" id="mensaje_contacto" pattern="[a-zA-Z0-9]{50,400}" class="bgcolor-transparent show one-hundred-porcent effect-input" minlength="50" maxlength="400" autocomplete="off" required="required"></textarea>
								<span class="before show bar-input-effect">
									<i class="fa fa-times gray pointer hide absolute clear-input-icon" aria-hidden="true"></i>
								</span>
								<p id="field-comments" class="inline-block relative error-input-form-contact"></p>
							</div>
					
							<div class="flex ctn-btns-form-contact">
								<input type="reset" id="clear_form_contact" name="clear_form_contact" class="white show txt-upper-case btn-shadow" value="Limpiar">

								<input type="submit" id="send_form_contact" name="send_form_contact" class="white show txt-upper-case btn-shadow" value="Enviar">
							</div>
						</form>
					</div>
					
					<div class="col-md-6 col-sm-12 col-xs-12" title="Formulario De Contacto">
						<img src="imgs/imgs-contact/form-contact/form-contact.jpg" class="one-hundred-porcent img-contact" alt="Formulario De Contacto">
					</div>
				</div>
			</div>
		</section>
		
		<!-- Contáctanos -->
		<section>
			<div class="ctn-contact-us">
				<div class="container">
					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="ctn-box-contact-us">
							<div class="txt-center">
								<a href="https://www.google.es/maps/place/Veinte+de+Julio, Colombia+Bogotá" target="_blank" class="link-contact-us">
									<i class="fa fa-map-marker radius icon-contact-us" aria-hidden="true"></i>
								</a>
							</div>
							
							<div class="txt-center">
								<a href="https://www.google.es/maps/place/Veinte+de+Julio, Colombia+Bogotá" target="_blank" class="link-contact-us">
									<h3 class="title-contact-us">
										Dirección
									</h3>
								</a>
							
								<a href="https://www.google.es/maps/place/Veinte+de+Julio, Colombia+Bogotá" target="_blank" class="link-contact-us">
									<span class="show lh-25 content-contact-us">
										Cll 30 A Sur 5 - 54, Bogotá Colombia
									</span>
								</a>
							</div>
						</div>
					</div>
				
					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="ctn-box-contact-us">
							<div class="txt-center">
								<a href="tel:+573108098793" class="link-contact-us">
									<i class="fa fa-mobile radius icon-contact-us" aria-hidden="true"></i>
								</a>
							</div>
							
							<div class="txt-center">
								<a href="tel:+573108098793" class="link-contact-us">
									<h3 class="title-contact-us">
										Movil
									</h3>
								</a>
							
								<a href="tel:+573108098793" class="link-contact-us">
									<span class="show lh-25 content-contact-us">
										(+57) 310 809 8793
									</span>
								</a>
							</div>
						</div>
					</div>
				
					<div class="col-md-4 col-sm-4 col-xs-12">
						<div class="ctn-box-contact-us">
							<div class="txt-center">
								<a href="tel:+570315511519" class="link-contact-us">
									<i class="fa fa-phone radius icon-contact-us" aria-hidden="true"></i>
								</a>
							</div>
							
							<div class="txt-center">
								<a href="tel:+570315511519" class="link-contact-us">
									<h3 class="title-contact-us">
										Fijo
									</h3>
								</a>
							
								<a href="tel:+570315511519" class="link-contact-us">
									<span class="show lh-25 content-contact-us">
										(+57) 031 551 1519
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?php include('includes/modals.php'); ?>

		<?php include('includes/footer-pc.php'); ?>

		<?php include('includes/footer-mobile.php'); ?>

		<?php include('includes/btn-go-to-up.php'); ?>

		<?php include('includes/scripts-js-general-before.php'); ?>

		<?php include('includes/scripts-js-general-after.php'); ?>

		<!-- Scrpits únicos de la web contacto -->
		<script src="js/jquery-contact/block-keys-form-contact.js"></script>
		<script src="js/jquery-contact/validate-form-contact.js"></script>
		<script src="js/jquery-general/modals.js"></script>

	</body>
</html>