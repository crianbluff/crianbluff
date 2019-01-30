$(document).ready(function() {
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('.loader-section').on('transitionend', function() {
        $('#preloader').remove();
      });

      /* Después de que termina de cargar las animaciones de las diferentes secciones y webs, se eliminan para que no hallá conflictos con los estilos */
      $('body').delay(2000).queue(function() {
        $(this).find('.fadein').removeClass('fadein');
        $(this).find('.fadeinup').removeClass('fadeinup');
        $(this).find('.fadeindown').removeClass('fadeindown');
        $(this).find('.fadeinleft').removeClass('fadeinleft');
        $(this).find('.fadeinright').removeClass('fadeinright');
        $(this).find('.bouncein').removeClass('bouncein');
        $(this).find('.bounceinleft').removeClass('bounceinleft');
        $(this).find('.bounceinright').removeClass('bounceinright');
        $(this).find('.gelatine').removeClass('gelatine');
      });

      // Añade las animaciones las distintas secciones y webs
      // Sección slider web general
      $('#slider').addClass('fadein');

      // Iconos sección servicios, contenido sección bienvenida web inicio, títulos y subtítulos quiénes somos, lenguajes, frameworks, cms, herramientas de desarrollo web quiénes somos, navegación por tabs soporte web soporte, copyright web general
      $('.link-icon-section-services, .col-animation-bounceinleft, .title-about-us, .title-languages, .title-frameworks, .title-cms, .title-tools-developer, .subtitle-about-us, .subtitle-languages, .subtitle-frameworks, .subtitle-cms, .subtitle-tools-developer, .navegation-tabs, .copyright-and-social').addClass('bounceinleft');

      // Frase sección bienevenida web inicio, footer-pc, footer-mobile web general
      $('.col-animation-bounceinright, #footer-pc, #footer-mobile-btn-plus-no-expand').addClass('bounceinright');

      // Títulos slider web inicio, acordeón sección tally web inicio, cajas soporte, icono columna soporte web soporte
      $('.title-slider, .acordeon, #ctn-icon-col-support, .ctn-box-support').addClass('fadeindown');

      // Sección servicios web incio, título, contenido y botón sección ayuda web inicio y web soporte, contenido de quiénes somos web quiénes somos
      $('.section-services-info, .title-section-help, .content-section-help, .btn-shadow, .content-about-us').addClass('bouncein');

      // Sección menú flex web general, imágen sección tally web inicio, títulos, iconos y contenido sección contactanos web contacto
      $('#header, .img-tally, .icon-contact-us, .title-contact-us, .content-contact-us').addClass('fadeinup');

      // Iconos columnas inicio, lenguajes, frameworks, cms y herramientas de desarrollo, imágenes lenguajes, frameowrks, cms herramientas de desarrollo quiénes somos web quiénes somos, botón ir arriba web general
      $('#ctn-icon-col-service, .ctn-icon-col-about-us, .ctn-img-development, #btn-go-to-up').addClass('gelatine');

      // Formulario contacto web contacto
      $('#form-contact').addClass('fadeinleft');

      // Imágen contacto web contacto
      $('.img-contact').addClass('fadeinright');
    }
  }, 2750 );
});