$(document).ready(function() {

	// Bloquea el click derecho
	$(document).on('contextmenu', function(e) {
		e.preventDefault();
	});

	// Para bloquear ciertas teclas y combinaciones entre ellas
	$(document).on('keydown keyup', function(e) {
		switch (e.ctrlKey) {
			// Códigos teclas bloqueadas
			// Shift  			 = 16
			// Ctrl   			 = 17
			// Alt    			 = 18
			// Bloq mayús		 = 20
			// Espacio       = 32
			// Re pág 			 = 33
			// Av pág 			 = 34
			// Fin    			 = 35
			// Inicio 			 = 36
			// Flecha arriba = 38
			// Flecha abajo  = 40
			// Insert        = 45
			// A       			 = 65
			// C       			 = 67
			// E             = 69
			// I       			 = 73
			// J       			 = 74
			// K             = 75
			// S             = 83
			// U       			 = 85
			// + del numpad  = 107
			// - del numpad  = 109
			// F12           = 123
			// Pausa         = 145
			// +             = 187
			// -             = 189
			case 16, 17, 18, 20, 32, 33, 34, 35, 36, 38, 40, 45, 107, 109, 123, 145, 187, 189:
				e.preventDefault();
			break;
			// Ctrl + fin, ctrl + inicio
			case e.ctrlKey && e.keyCode == 35 || e.ctrlKey && e.keyCode == 36:
			e.preventDefault();
			break;
			// Ctrl + a, ctrl + s, ctrl + u, 
			case e.ctrlKey && e.keyCode == 65 || e.ctrlKey && e.keyCode == 83 || e.ctrlKey && e.keyCode == 85:
				e.preventDefault();
			break;
			// Ctrl + "+", ctrl + "-", ctrl + "+" del numpad, ctrl + "-" del numpad 
			case e.ctrlKey && e.keyCode == 107 || e.ctrlKey && e.keyCode == 109 || e.ctrlKey && e.keyCode == 187 || e.ctrlKey && e.keyCode == 189:
			e.preventDefault();
			break;
			// Ctrl + shift + c, ctrl + shift + e, ctrl + shift + i
			case e.ctrlKey && e.shiftKey && e.keyCode == 67 || e.ctrlKey && e.shiftKey && e.keyCode == 69 || e.ctrlKey && e.shiftKey && e.keyCode == 73:
				e.preventDefault();
			break;
			// Ctrl + shift + j, ctrl + shift + k
			case e.ctrlKey && e.shiftKey && e.keyCode == 74 || e.ctrlKey && e.shiftKey && e.keyCode == 75:
				e.preventDefault();
			break;
		}
	});
});