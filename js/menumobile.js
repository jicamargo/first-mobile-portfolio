
	// objeto para propiedades
	var propMenu ={

		burguer_menu: document.getElementById('burguer_menu'),
		slideMenu: document.getElementById('slidemenu'),
	 	menu_activo: false,
	 	elem_menu: document.querySelectorAll('#slidemenu .menu-principal a')
	}


	// objeto para metodos
	var metMenu ={

		inicio: function () {

			propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu); 

			for (var i = 0; i < propMenu.elem_menu.length; i++) {
				
				propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu) ;
			}
		},

		toggleMenu: function () {

			if (propMenu.menu_activo == false) {

				propMenu.menu_activo = true ;
				propMenu.slideMenu.className += ' active' ;
			} else {
				propMenu.menu_activo = false ;
				propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');

			}
		},

		ocultarMenu: function () {	
				
				propMenu.menu_activo = false ;
				propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
		}
	}

	metMenu.inicio();