$(document).ready(function() {
	
	// Validación para cuando le de click al icono de la columna de servicios cambie la organización de las columnas de la sección servicios
	// Y se cambie el icono 
	$('#ctn-icon-col-service').on('click', function() {
		$(this).children('i').toggleClass('fa-bars fa-th-large');
		$(this).siblings('.container').find('#row-service').toggleClass('row-service');
		$(this).siblings('.container').find('.col-md-4').toggleClass('col-md-12');
	});

	// Validación para cuando le de click al icono de la columna de soporte cambie la organización de las columnas de la sección soporte
	// Y se cambie el icono 
	$('#ctn-icon-col-support').on('click', function() {
		$(this).children('i').toggleClass('fa-stop fa-th-large');
		$(this).siblings('#ctn-support').find('.col-md-6').toggleClass('col-md-12 col-sm-6');
	});

	$('.ctn-icon-col-plus').on('click', function() {
		if ($(this).siblings('.container').find('.col-4').hasClass('col-4')) {
			$(this).siblings('.container').find('.col-4').removeClass('col-4 col-md-4 col-sm-4 col-xs-4').addClass('col-12 col-md-12 col-sm-12 col-xs-12');
		}

		if ($(this).siblings('.container').find('.col-2').hasClass('col-2')) {
			$(this).siblings('.container').find('.col-2').removeClass('col-2 col-md-2 col-sm-2 col-xs-2').addClass('col-4 col-md-4 col-sm-4 col-xs-4');
		}
	});

	$('.ctn-icon-col-minus').on('click', function() {
		if ($(this).siblings('.container').find('.col-4').hasClass('col-4')) {
			$(this).siblings('.container').find('.col-4').removeClass('col-4 col-md-4 col-sm-4 col-xs-4').addClass('col-2 col-md-2 col-sm-2 col-xs-2');
		}

		if ($(this).siblings('.container').find('.col-12').hasClass('col-12')) {
			$(this).siblings('.container').find('.col-12').removeClass('col-12 col-md-12 col-sm-12 col-xs-12').addClass('col-4 col-md-4 col-sm-4 col-xs-4');
		}
	});

	// Validación para cuando le de click al icono de la columna de frameworks y cms cambie la organización de las columnas de la sección frameworks y cms
	// Y se cambie el icono 
	$('#ctn-icon-col-frameworks, #ctn-icon-col-cms').on('click', function() {
		$(this).children('i').toggleClass('fa-ellipsis-v fa-ellipsis-h');
		$(this).siblings('.container').find('.col-md-4').toggleClass('col-md-12 col-sm-12 col-xs-12');
	});

});