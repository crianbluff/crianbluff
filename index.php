<!DOCTYPE html>
<html lang="es">
	<head>
		<?php include('includes/metas-general-before.php'); ?>
		<!-- Metas property, etc únicas de esa web -->
		<meta name="apple-mobile-web-app-title" content="Crianbluff | Inicio">
		<meta property="og:title" content="Crianbluff | Inicio">
		<meta property="twitter:title" content="Crianbluff | Inicio">
		<meta property="og:url" content="https://crianbluff.com/index.php">
		<?php include('includes/metas-general-after.php'); ?>
			<title>
			  Crianbluff
			</title>
		<?php include('includes/links-styles-general-before.php'); ?>
		<!-- Estilos únicos de la web inicio -->
		<link rel="stylesheet" href="css/styles-home/home.css">
		<?php include('includes/links-styles-general-after.php'); ?>
	</head>

	<body class="no-scroll-y">
		
		<?php include('includes/preloader.php'); ?>

		<?php include('includes/menu-flex.php'); ?>

		<?php include('includes/slider.php'); ?>

		<!-- Servicios -->
		<section>
			<div id="section-services" class="relative section-services">
				<button id="ctn-icon-col-service" class="gray-dark hide absolute txt-center ctn-icon-col-service">
					<i class="fa fa-bars" aria-hidden="true"></i>
				</button>

				<div class="container">
					<div id="row-service" class="row row-service">
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-app-web before txt-center link-modal service-apps-web link-icon-section-services" title="Aplicaciones Personalizadas" data-modal="#modal-service-apps-web">
									<i class="fa fa-android icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-apps-web title-section-services" data-modal="#modal-service-apps-web">
									Aplicaciones Personalizadas
								</h4>
								<p class="gray lh-25 info-section-services">
									No haga que su negocio se adapte a una aplicación... la aplicación se debe adaptar a su necesidad...
								</p>
							</div>
						</div>
					
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-html5 before txt-center link-modal service-design-pages-web link-icon-section-services" title="Diseño De Páginas Web"  data-modal="#modal-service-design-pages-web">
									<i class="fa fa-html5 icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-design-pages-web title-section-services" data-modal="#modal-service-design-pages-web">
									Diseño De Páginas Web
								</h4>
								<p class="gray lh-25 info-section-services">
									Nos especializamos en crear Websites intuitivos, gráficamente atractivos y que comunican efectivamente el mensaje que...
								</p>
							</div>
						</div>
					
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-database before txt-center link-modal service-database link-icon-section-services" title="Base De Datos" data-modal="#modal-service-database">
									<i class="fa fa-database icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-database title-section-services" data-modal="#modal-service-database">
									Base De Datos
								</h4>
								<p class="gray lh-25 info-section-services">
									Ofrecemos servicios de consultoría / mantenimiento de bases de datos en entornos empresariales. Nuestro porfolio se dirige a...
								</p>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-commerce-electronic before txt-center link-modal service-commerce-electronic link-icon-section-services" title="Comercio Electrónico" data-modal="#modal-service-commerce-electronic">
									<i class="fa fa-shopping-cart icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-commerce-electronic title-section-services" data-modal="#modal-service-commerce-electronic">
									Comercio Electrónico
								</h4>
								<p class="gray lh-25 info-section-services">
									Ayudamos a que su negocio abra las 24 horas del día durante los 365 días del año, siempre conectados a su inventario y sin duplicar información...
								</p>
							</div>
						</div>
					
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-hosting before txt-center link-modal link-icon-section-services service-hosting-domains" title="Hosting" data-modal="#modal-service-hosting-domains">
									<i class="fa fa-server icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-hosting-domains title-section-services" data-modal="#modal-service-hosting-domains">
									Hosting
								</h4>
								<p class="gray lh-25 info-section-services">
									Nuestros planes le permiten escalar fácilmente, iniciando con el almacenamiento necesario para su negocio o idea sin tener que pagar adicional sobre...
								</p>
							</div>
						</div>
					
						<div class="col-md-4 col-sm-12 col-xs-12">
							<div>
								<a href="javascript:void(0);" class="radius icon-domain before txt-center link-modal link-icon-section-services service-hosting-domains" title="Dominios" data-modal="#modal-service-hosting-domains">
									<i class="fa fa-folder icon-section-services" aria-hidden="true"></i>
								</a>
							</div>
				
							<div class="section-services-info">
								<h4 class="pointer txt-upper-case link-modal service-hosting-domains title-section-services" data-modal="#modal-service-hosting-domains">
									Dominios
								</h4>
								<p class="gray lh-25 info-section-services">
									Nosotros gestionamos todo lo que requiere para adquirir y colocar en línea su web, desde una simple página de servicios, cuentas de correo o hasta una compleja tienda de...
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Botón de ir a la siguiente sección servicios -->
				<div class="relative txt-center one-hundred-porcent move-services">
					<a href="#ctn-welcome">
						<i class="fa fa-chevron-down gray arrow-down-services" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</section>

		<!-- Bienvenida -->
		<section>
			<div id="ctn-welcome" class="ctn-welcome">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-12 col-xs-12 col-animation-bounceinleft">
							<div class="gray-dark lh-25 section-welcome-title">
								<h2>
									Bienvenid@ a crianbluff.com
								</h2>
							</div>
				
							<div>
								<p class="gray lh-25 info-section-welcome">
								  Creamos,
									<span class="bold">
										Aplicaciones, sitios web atractivos, interactivos modernos.
									</span>
									Le ayudamos a construir una fuerte presencia en línea para su negocio, mediante la creación de un sitio web profesional que mejor se adapte a sus necesidades y a su público objetivo.
									<span class="bold">
									  Entregando una solución integral
									</span>
									sin que tenga que recurrir a varios proveedores.
								 </p>
						  	<p class="gray info-section-welcome">
						  		Nos apasiona
						  		<span class="bold">
						  			ayudar a nuestros clientes,
					  			</span>
						  		mejorar su experiencia de usuario en línea y por lo tanto generan más tráfico en su sitio web y aumentan las ventas en línea.
					  		</p>
					  	</div>
				  	</div>
							
						<div class="col-md-6 col-sm-12 col-xs-12 col-animation-bounceinright">
							<div class="gray txt-center section-welcome-phrase">
								<span>
								  "La creatividad a menudo consiste en el simple giro de hasta lo que ya está ahí."
								</span>
							</div>

							<div class="gray-clear section-welcome-author-phrase">
								<span>
									-Bernice Fitz-Gibbon
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?php include('includes/help.php'); ?>

		<!-- Acordeón con información de tally e imágen -->
		<section>
			<div class="ctn-tally">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-12 col-xs-12">
							<div class="acordeon">
								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class="gray-dark title-content-acordeon">
											¿Que es crianbluff?
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon rotate-icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>

								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class=" gray-dark title-content-acordeon">
											¿En que consiste crianbluff?
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="hide ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>

								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class="gray-dark title-content-acordeon">
											Tally 3
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="hide ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>

								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class="gray-dark title-content-acordeon">
											Tally 4
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="hide ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>

								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class="gray-dark title-content-acordeon">
											Tally 5
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="hide ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>

								<div class="ctn-acordeon">
									<div class="flex-a pointer one-hundred-porcent ctn-title-content-acordeon">
										<h1 class="gray-dark title-content-acordeon">
											Tally 6
										</h1>
										<i class="fa fa-plus-circle gray-dark icon-acordeon" aria-hidden="true"></i>
									</div>
									
									<div class="hide ctn-content-acordeon">
										<p class="lh-25 content-acordeon">
											Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-sm-12 col-xs-12" title="Logo Tally">
							<img src="imgs/imgs-home/tally/logo-tally.jpg" class="one-hundred-porcent img-tally" alt="Logo Tally">
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

		<!-- Scrpits únicos de la web inicio -->
		<script src="js/jquery-home/scroll-validation-home.js"></script>

		<?php include('includes/scripts-js-general-after.php'); ?>

		<!-- Scrpits únicos de la web inicio -->
		<script src="js/jquery-general/change-cols.js"></script>
		<script src="js/jquery-home/acordeon.js"></script>
		<script src="js/jquery-general/modals.js"></script>
		<script src="js/jquery-general/block-keys.js"></script>

	</body>
</html>