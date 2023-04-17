let burguer_menu = document.getElementById('burguer_menu');
let	slideMenu = document.getElementById('slidemenu');
let	elem_menu = document.querySelectorAll('#slidemenu a');

function toggleMenu() {
	slideMenu.classList.toggle("active");
 }

burguer_menu.addEventListener('click', toggleMenu); 

for (let i = 0; i < elem_menu.length; i++) {
		elem_menu[i].addEventListener('click', toggleMenu);
}
