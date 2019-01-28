$(document).ready(function() {

	// Variables para guardar los modales
  // Modal sección aplicaciones web
	let modalAppsWeb =
	'<div class="relative ctn-modal">' +
		'<div class="bgcolor-white relative modal-content">' +
			'<div class="flex one-hundred-porcent modal-header">' +
				'<h2 class="title-header-modal">' +
					'Aplicaciones Web' +
				'</h2>' +

				'<button class="txt-center btn-close-modal" onclick="closeModal();">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
				'</button>' +
			'</div>' +
		
			'<div class="modal-body">' +
				'<img src="imgs/imgs-general/modals/modal-apps/apps-1.jpg" class="img-modal" alt="Aplicaciones Web" title="Aplicaciones Web">' +
				'<img src="imgs/imgs-general/modals/modal-apps/apps-2.jpg" class="img-modal" alt="Aplicaciones Web" title="Aplicaciones Web">' +
				'<img src="imgs/imgs-general/modals/modal-apps/apps-3.jpg" class="img-modal" alt="Aplicaciones Web" title="Aplicaciones Web">' +
				'<img src="imgs/imgs-general/modals/modal-apps/apps-4.jpg" class="img-modal" alt="Aplicaciones Web" title="Aplicaciones Web">' +

				'<p class="lh-25 content-modal">' +
					'Actualmente en las empresas existen nuevas formas de hacer negocios a través de Internet y buscan estar en constante evolución tecnológica, nosotros desarrollamos Aplicaciones Web a la medida y en correspondencia a los procesos, productos y servicios que usted ofrece, logrando que optimice la eficiencia de gastos, asegurándole mejoras en las ganancias y generando una mejor comunicación con sus clientes, socios, proveedores y empleados.' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Para la realización del mismo, se establece un plan de trabajo en cinco etapas:' +
				'</p>' +

				'<ul class="ctn-list-modal">' +
					'<li class="list-modal-whithout-title">' +
						'1. Definición de las páginas a visualizar.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'2. Contenidos y arquitectura de su información.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'3. Maquetación y diseño web.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'4. Programación puesta a punto y revisión para ajustes.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'5. Lanzamiento en línea.' +
					'</li>' +
				'</ul>' +

				'<p class="lh-25 content-modal">' +
					'Algunas de las tecnologías que se emplean para el desarrollo de las aplicaciones son:' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Html5, Css3, Javascript, Wordpress, Php, etc.' +
				'</p>' +
			'</div>' +
		
			'<div class="modal-footer">' +
				'<button class="white inline-block no-select btn-shadow btn-close-footer-modal" onclick="closeModal();">' +
				  'Cerrar' +
				'</button>' +
			'</div>' +
		'</div>' +
	'</div>';

	// Modal sección diseño páginas web
	let modalDesignPagesWeb =
	'<div class="relative ctn-modal">' +
		'<div class="bgcolor-white relative modal-content">' +
			'<div class="flex one-hundred-porcent modal-header">' +
				'<h2 class="title-header-modal">' +
					'Diseño De Páginas Web' +
				'</h2>' +

				'<button class="txt-center btn-close-modal" onclick="closeModal();">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
				'</button>' +
			'</div>' +
		
			'<div class="modal-body">' +
				'<img src="imgs/imgs-general/modals/modal-design-pages-web/design-pages-web-1.jpg" class="img-modal"  alt="Diseño De Páginas Web" title="Diseño De Páginas Web">' +
				'<img src="imgs/imgs-general/modals/modal-design-pages-web/design-pages-web-2.jpg" class="img-modal"  alt="Diseño De Páginas Web" title="Diseño De Páginas Web">' +
				'<img src="imgs/imgs-general/modals/modal-design-pages-web/design-pages-web-3.jpg" class="img-modal"  alt="Diseño De Páginas Web" title="Diseño De Páginas Web">' +
				'<img src="imgs/imgs-general/modals/modal-design-pages-web/design-pages-web-4.jpg" class="img-modal"  alt="Diseño De Páginas Web" title="Diseño De Páginas Web">' +

				'<p class="lh-25 content-modal">' +
					'Nos especializamos en crear Websites intuitivos, gráficamente atractivos y que comunican efectivamente el mensaje de Marketing; si busca una compañía de diseño web que tome todas sus preocupaciones en esta área por usted, entonces somos lo que está buscando. Nos adaptamos de la mejor manera a sus necesidades, presupuesto, expresándonos siempre a través de su identidad corporativa. Somos especialistas en construir soluciones a la medida, enfocadas a la mejora de los procesos corporativos y comerciales de nuestros clientes, desarrolladas bajo diferentes plataformas y lenguajes. Durante el proceso se realiza un acompañamiento para definir adecuadamente, y según las necesidades específicas de cada cliente, el diseño, arquitectura, desarrollo, implementación y soporte.' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Ideal para empresas que desean publicar su catálogo de productos en línea, tienda virtual 100% administrable, con todos los módulos de administración necesarios: clientes, pedidos, métodos de pago. Diseño web profesional. Administrador de contenido.' +
				'</p>' +
				
				'<ul class="ctn-list-modal">' +
					'<li class="list-modal-whithout-title">' +
						'1. Administrador de Catálogo de Productos.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'2. Administrador de usuarios.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'3. Carrito de compras.' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'4. Buscador de productos' +
					'</li>' +

					'<li class="list-modal-whithout-title">' +
						'5. Formulario de contacto' +
					'</li>' +
				'</ul>' +
			'</div>' +
		
			'<div class="modal-footer">' +
				'<button class="white inline-block no-select btn-shadow btn-close-footer-modal" onclick="closeModal();">' +
			  	'Cerrar' +
				'</button>' +
			'</div>' +
		'</div>' +
	'</div>';

  // Modal sección base de datos
	let modalDatabase =
	'<div class="relative ctn-modal">' +
		'<div class="bgcolor-white relative modal-content">' +
			'<div class="flex one-hundred-porcent modal-header">' +
				'<h2 class="title-header-modal">' +
					'Base De Datos' +
				'</h2>' +

				'<button class="txt-center btn-close-modal" onclick="closeModal();">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
				'</button>' +
			'</div>' +
		
			'<div class="modal-body">' +
				'<img src="imgs/imgs-general/modals/modal-database/database-1.jpg" class="img-modal"  alt="Base De Datos" title="Base De Datos">' +
				'<img src="imgs/imgs-general/modals/modal-database/database-2.jpg" class="img-modal"  alt="Base De Datos" title="Base De Datos">' +

				'<p class="lh-25 content-modal">' +
					'Ofrecemos servicios de consultoría, mantenimiento y auditoría de bases de datos en cualquier entorno. Nuestro portafolio se dirige a compañías que requieren de un proveedor especializado y de confianza. Un socio estratégico para abordar proyectos que exigen experiencia y conocimiento en entornos de bases de datos, ya sea Oracle, MySQL, SQL Server o Sybase. Nuestros consultores y técnicos cuentan con amplia experiencia en la administración de bases de datos en entornos críticos liderando proyectos de migración e implantación de bases de datos para grandes compañías.' +
				'</p>' +

				'<ul class="ctn-list-modal">' +
					'<p class="bold highlight lh-25 content-modal">' +
						'Objetivo' +
					'</p>' +

					'<li class="lh-25 list-modal">' +
						'Nuestro objetivo es convertirnos en un proveedor cercano al cliente y capaz de ofrecer la confianza suficiente para dejar en nuestras manos uno de los activos más importante de cualquier empresa…' +
						'<span class="bold highlight">' +
							'sus datos!. ' +
						'</span>' +
						'Nuestros Servicios de soporte les permitirán planificar y efectuar tareas operativas o de alto impacto, contando en todo momento con la experiencia de un consultor experimentado y un equipo de apoyo para sus labores diarias; nuestros clientes reciben cumplimiento en los niveles de servicio, asesoría en mejoras de plataforma, optimización de recursos e implementación de soluciones.' +
					'</li>' +

					'<p class="bold highlight lh-25 content-modal">' +
						'Consultoría y Auditoría' +
					'</p>' +

					'<li class="lh-25 list-modal">' +
						'Apoyamos nuestros clientes en cualquier proceso de instalación y configuración o cuando requieren una afinación de sus sistemas para optimizar los recursos de infraestructura de su negocio, garantizando la disponibilidad y confiabilidad de la información.' +
					'</li>' +

					'<p class="bold highlight lh-25 content-modal">' +
						'Cómo trabajamos' +
					'</p>' +

					'<li class="lh-25 list-modal">' +
						'Creamos paquetes de horas personalizados a la necesidad de cada cliente para: atención del día a día, soporte de incidentes y problemas, atención de requerimientos propios de la organización relacionados con bases datos, planes de mantenimiento preventivo, ‘automatizados’ al máximo para disminuir los costos de operación y personal en sitio, gestión administrativa de usuarios, accesos, conexiones, auditoria, modificación de datos y reportes. Controlamos nuestros servicios con indicadores de gestión, esto nos permite entregar al cliente periódicamente mejoras en todos los procesos, implementando calidad en los servicios y disminuyendo sus costos de atención de problemas o incidentes.' +
					'</li>' +
				'</ul>' +
			'</div>' +
		
			'<div class="modal-footer"> ' +
				'<button class="white inline-block no-select btn-shadow btn-close-footer-modal" onclick="closeModal();"> ' +
					'Cerrar' +
				'</button> ' +
			'</div> ' +
		'</div> ' +
	'</div> ';

	// Modal sección comercio electrónico
	let modalCommerceElectronic =
	'<div class="relative ctn-modal">' +
		'<div class="bgcolor-white relative modal-content">' +
			'<div class="flex one-hundred-porcent modal-header">' +
				'<h2 class="title-header-modal">' +
					'Comercio Electrónico' +
				'</h2>' +

				'<button class="txt-center btn-close-modal" onclick="closeModal();">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
				'</button>' +
			'</div>' +
		
			'<div class="modal-body">' +
				'<img src="imgs/imgs-general/modals/modal-commerce-electronic/commerce-electronic-1.jpg" class="img-modal"  alt="Comercio Electrónico" title="Comercio Electrónico">' +
				'<img src="imgs/imgs-general/modals/modal-commerce-electronic/commerce-electronic-2.jpg" class="img-modal"  alt="Comercio Electrónico" title="Comercio Electrónico">' +
				'<img src="imgs/imgs-general/modals/modal-commerce-electronic/commerce-electronic-3.jpg" class="img-modal"  alt="Comercio Electrónico" title="Comercio Electrónico">' +
				'<img src="imgs/imgs-general/modals/modal-commerce-electronic/commerce-electronic-4.jpg" class="img-modal"  alt="Comercio Electrónico" title="Comercio Electrónico">' +

				'<p class="lh-25 content-modal">' +
					'Nosotros le ayudamos a la incorporación de este nuevo método de ventas permitiendo que los clientes accedan de manera simple y ' +
					'<span class="bold highlight">' +
						'desde cualquier parte del mundo ' +
					'</span>' +
					'a los productos y servicios que la empresa ofrece. E-commerce o Comercio Electrónico consiste en la distribución, venta, compra, marketing y suministro de información de productos o servicios a través de Internet.' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Conscientes de estar a la vanguardia, las Pymes no se han quedado atrás en este nuevo mercado, por lo que han hecho de los servicios de la red un lugar que permite acceder a sus productos y servicios durante las ' +
					'<span class="bold highlight">' +
						'24 horas del día.' +
					'</span>' +
				'</p>' +

				'<ul class="ctn-list-modal">' +
					'<p class="bold highlight lh-25 content-modal">' +
						'Ventajas del comercio electrónico en las empresas' +
					'</p>' +

					'<li class="lh-25 list-modal">' +
						'1. Expandir la base de clientes al entrar a un mercado más amplio.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'2. Venta directa e interactiva de productos a los clientes.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'3. Extender el horario de venta las 24 horas del día, los siete días de la semana, 365 días al año.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'4. Crear una ventaja competitiva.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'5. Reducir costos de producción, capital, administración, entre otros.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'6. Mejorar la comunicación con los clientes y efectividad de campañas publicitarias.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'7. Creación de canales nuevos de marketing y ventas.' +
					'</li>' +

					'<li class="lh-25 list-modal">' +
						'8. Acceso interactivo a catálogos de productos, listas de precios y folletos publicitarios.' +
					'</li>' +
				'</ul>' +
			'</div>' +
		
			'<div class="modal-footer">' +
				'<button class="white inline-block no-select btn-shadow btn-close-footer-modal" onclick="closeModal();">' +
				  'Cerrar' +
				'</button>' +
			'</div>' +
		'</div>' +
	'</div>';

	// Modal sección hosting - dominios
	let modalHostingDomains =
	'<div class="relative ctn-modal">' +
		'<div class="bgcolor-white relative modal-content">' +
			'<div class="flex one-hundred-porcent modal-header">' +
				'<h2 class="title-header-modal">' +
					'Hosting - Dominios' +
				'</h2>' +

				'<button class="txt-center btn-close-modal" onclick="closeModal();">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
				'</button>' +
			'</div>' +
		
			'<div class="modal-body">' +
					'<img src="imgs/imgs-general/modals/modal-hosting-domains/hosting-domains-1.jpg" class="img-modal"  alt="Hosting - Dominios" title="Hosting - Dominios">' +
					'<img src="imgs/imgs-general/modals/modal-hosting-domains/hosting-domains-2.jpg" class="img-modal"  alt="Hosting - Dominios" title="Hosting - Dominios">' +
					'<img src="imgs/imgs-general/modals/modal-hosting-domains/hosting-domains-3.jpg" class="img-modal"  alt="Hosting - Dominios" title="Hosting - Dominios">' +
					'<img src="imgs/imgs-general/modals/modal-hosting-domains/hosting-domains-4.jpg" class="img-modal"  alt="Hosting - Dominios" title="Hosting - Dominios">' +

				'<p class="lh-25 content-modal">' +
					'<span class="bold highlight">' +
						'Dominio ' +
					'</span>' +
					'es el primer paso para aparecer en Internet! El dominio es el nombre y ubicación de su empresa en internet por lo cual un buen nombre hará de su empresa un gran sitio… una vez que tenga su dominio, necesita conectarlo a su sitio web a través de:' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'<span class="bold highlight">' +
						'Web Hosting ' +
					'</span>' +
					'es el servicio que provee el ' +
					'<span class="bold highlight">' +
					  'espacio en Internet ' +
				  '</span>' +
					'para los sitios web, estos servicios funcionan ofreciéndote computadoras de grandes prestaciones (servidores web), utilizando ' +
					'<span class="bold highlight">' +
						'conexiones de alta velocidad ' +
					'</span>' +
					'además de muchas otras prestaciones. Cuando alguien escribe tu dirección web ellos se conectaran al servidor web donde esté alojado tu página y descargarán los archivos permitidos de tu sitio.' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Nosotros ofrecemos una garantía de disponibilidad (uptime) del 99,8%, utilizamos hardware de última tecnología y nos esforzamos por tener el mejor soporte disponible las 24 horas, nuestros planes están divididos dependiendo de tus necesidades siempre con un precio competitivo teniendo en cuenta que nunca sobre vendemos el espacio y recursos reales que te ofrecemos, garantizando nuestros acuerdos de servicio y previniendo cualquier falla en los sistemas.' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'Nuestros Planes le permiten escalar fácilmente, iniciando con el ' +
					'<span class="bold highlight">' +
						'almacenamiento necesario para su negocio ' +
					'</span>' +
					'o idea sin tener que pagar adicional sobre la solución que usted quiere o necesita, adicionalmente nosotros gestionamos todo lo que requiere para adquirir y colocar en línea su web, desde un dominio o una simple página de servicios, cuentas de correo personalizadas o hasta una compleja tienda de servicios o venta de productos; usted puede o no tener el conocimiento de sistemas, web,' +
				'</p>' +

				'<p class="lh-25 content-modal">' +
					'transnacionalidad o cualquier tema relacionado, ya que ' +
					'<span class="bold highlight">' +
						'nosotros le orientamos y le entregamos una solución integral e integrada a su empresa.' +
					'</span>' +
				'</p>' +
			'</div>' +
		
			'<div class="modal-footer">' +
				'<button class="white inline-block no-select btn-shadow btn-close-footer-modal" onclick="closeModal();">' +
					'Cerrar' +
				'</button>' +
			'</div>' +
		'</div>' +
	'</div>';

	// Modal sección tarjeta presentación creador de la web
	let modalCreatorWeb =
	'<div class="relative one-hundred-porcent card-presentation">' +
		'<div class="absolute-lt-zero-hundred-porcent front-card-presentation">' +
			'<button class="white absolute close-card-presentation btn-close-modal" onclick="closeModal();">' +
				'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
			'</button>' +

			'<div class="one-hundred-porcent wallpaper-card-presentation"></div>' +
			'<div class="radius absolute avatar-card-presentation"></div>' +
		
			'<div class="one-hundred-porcent ctn-front-content-card-presentation">' +
				'<div class="white txt-center front-content-card-presentation">' +
					'<h1>' +
					  'Cristian Castillo' +
					'</h1>' +
					'<h2>' +
					  'Desarrollador Web' +
					'</h2>' +
					'<div class="flag-colombia-card-presentation"></div>' +
				'</div>' +
			'</div>' +
		
			'<div class="absolute txt-center one-hundred-porcent social-media-card-presentation">' +
				'<a href="tel:+573108098793" class="inline-block links-section-media-card-presentation" title="Teléfono Creador De La Web">' +
					'<i class="fa fa-phone" aria-hidden="true"></i>' +
				'</a>' +

				'<a href="mailto:crianbluff77@gmail.com" class="inline-block links-section-media-card-presentation" title="Correo Creador De La Web">' +
					'<i class="fa fa-envelope" aria-hidden="true"></i>' +
				'</a>' +

				'<a href="https://codepen.io/crianbluff" target="_blank" class="inline-block links-section-media-card-presentation" title="Usuario Codepen Creador De La Web">' +
					'<i class="fa fa-codepen" aria-hidden="true"></i>' +
				'</a>' +

				'<a href="javascript:void(0);" class="inline-block share-whatsapp-creator links-section-media-card-presentation" title="Whatsapp Creador De La Web" onclick="shareWhatsappCreatorWeb();">' +
					'<i class="fa fa-whatsapp" aria-hidden="true"></i>' +
				'</a>' +

				'<a href="https://www.instagram.com/crianbluff" target="_blank" class="inline-block links-section-media-card-presentation" title="Instagram Creador De La Web">' +
					'<i class="fa fa-instagram" aria-hidden="true"></i>' +
				'</a>' +

				'<a href="javascript:void(0);" class="inline-block icon-flip links-section-media-card-presentation" title="Volver" onclick="flipCard();">' +
					'<i class="fa fa-undo" aria-hidden="true"></i>' +
				'</a>' +
			'</div>' +
		'</div>' +
		
		'<div class="flex-a absolute-lt-zero-hundred-porcent back-card-presentation">' +
			'<button class="white absolute close-card-presentation btn-close-modal" onclick="closeModal();">' +
				'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
			'</button>' +
			'<div class="white back-content-card-presentation">' +
				'<h1 class="absolute txt-center one-hundred-porcent title-back-content-card-presentation">' +
				  'Skills' +
				'</h1>' +
				
				'<ul class="txt-center">' +
					'<li class="lh-25 skills-creator-card-presentation">' +
						'Html / Html 5' +
					'</li>' +

					'<li class="lh-25 skills-creator-card-presentation">' +
						'Css / Css3' +
					'</li>' +

					'<li class="lh-25 skills-creator-card-presentation">' +
						'Javascript' +
					'</li>' +

					'<li class="lh-25 skills-creator-card-presentation">' +
						'Jquery' +
					'</li>' +

					'<li class="lh-25 skills-creator-card-presentation">' +
						'<p>' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
							'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
							'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
							'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
							'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
							'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
						'</p>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		
			'<div class="absolute txt-center one-hundred-porcent social-media-card-presentation">' +
				'<div>' +
					'<a href="tel:+573108098793" class="inline-block links-section-media-card-presentation" title="Teléfono Creador De La Web">' +
					  '<i class="fa fa-phone" aria-hidden="true"></i>' +
					'</a>' +

					'<a href="mailto:crianbluff77@gmail.com" class="inline-block links-section-media-card-presentation" title="Correo Creador De La Web">' +
					 '<i class="fa fa-envelope" aria-hidden="true"></i>' +
					'</a>' +

					'<a href="https://codepen.io/crianbluff" target="_blank" class="inline-block links-section-media-card-presentation" title="Usuario Codepen Creador De La Web">' +
					 '<i class="fa fa-codepen" aria-hidden="true"></i>' +
					'</a>' +

					'<a href="javascript:void(0);" class="inline-block share-whatsapp-creator links-section-media-card-presentation" title="Whatsapp Creador De La Web" onclick="shareWhatsappCreatorWeb();">' +
					 '<i class="fa fa-whatsapp" aria-hidden="true"></i>' +
					'</a>' +

					'<a href="https://www.instagram.com/crianbluff" target="_blank" class="inline-block links-section-media-card-presentation" title="Instagram Creador De La Web">' +
					 '<i class="fa fa-instagram" aria-hidden="true"></i>' +
					'</a>' +

					'<a href="javascript:void(0);" class="inline-block icon-flip links-section-media-card-presentation" title="Volver" onclick="flipCard();">' +
					 '<i class="fa fa-undo" aria-hidden="true"></i>' +
					'</a>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';

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

	// Cuando le dan click en el servicio "aplicaciones personalizadas" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal de "aplicaciones personalizadas"
	let countModalAppWeb = 0;
	$('.service-apps-web').on('click', function() {
		if (countModalAppWeb <= 0) {
			countModalAppWeb++;
			$('#modal-service-apps-web').append(modalAppsWeb);
		}
	});

	// Cuando le dan click en el servicio "diseños de páginas web" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal de "diseños de páginas web"
	let countModalDesignPagesWeb = 0;
	$('.service-design-pages-web').on('click', function() {
		if (countModalDesignPagesWeb <= 0) {
			countModalDesignPagesWeb++;
			$('#modal-service-design-pages-web').append(modalDesignPagesWeb);
		}
	});

	// Cuando le dan click en el servicio "base de datos" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal de "base de datos"
	let countModalDatabase = 0;
	$('.service-database').on('click', function() {
		if (countModalDatabase <= 0) {
			countModalDatabase++;
			$('#modal-service-database').append(modalDatabase);
		}
	});

	// Cuando le dan click en el servicio "comercio electrónico" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal de "comercio electrónico"
	let countModalCommerceElectronic = 0;
	$('.service-commerce-electronic').on('click', function() {
		if (countModalCommerceElectronic <= 0) {
			countModalCommerceElectronic++;
			$('#modal-service-commerce-electronic').append(modalCommerceElectronic);
		}
	});

	// Cuando le dan click en el servicio "hosting - dominios" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal de "hosting - dominios"
	let countModalHostingDomains = 0;
	$('.service-hosting-domains').on('click', function() {
		if (countModalHostingDomains <= 0) {
			countModalHostingDomains++;
			$('#modal-service-hosting-domains').append(modalHostingDomains);
		}
	});

	// Cuando le dan click en el "creador de la web" si no existe el modal lo crea y con un delay de un milisegundo le agrega una clase para mostrar el modal del "creador de la web"
	let countModalCreator = 0;
	$('#creator-web').on('click', function() {
		if (countModalCreator <= 0) {
			countModalCreator++;
			$('#card').append(modalCreatorWeb);
		}
	});

	// Cuando dan click en las paletas de colores captura el texto que esta en el atributo data-palette-color, luego inserta esa palabra capturada en el título y la pregunta del modal de temas
	$('.paletts-colors, .paletts-colors-footer-mobil').on('click', function() {
		let captureWord = $(this).attr('data-palette-color');
		$('.theme-selected').text(captureWord);
		$('.theme-selected').attr('data-palette-color', captureWord);
	});

	// Cuando le dan click en los botones aceptar o denegar del modal de temas, se cierra el modal
	$('.btns-modal-themes').on('click', function() {
		closeModal();
	});

	// Si le da la tecla Escape cierra el modal
	// Escape = 27
	$(document).on('keydown keyup', function(e) {
		e.which == 27 ? closeModal() : '';
	});

});