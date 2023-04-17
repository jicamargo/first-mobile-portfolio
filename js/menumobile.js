const menuBur = document.getElementById('burguer-menu');
const slideMenu = document.getElementById('slidemenu');
const elemMenu = document.querySelectorAll('#slidemenu a');

function toggleMenu() {
  slideMenu.classList.toggle('active');
}

menuBur.addEventListener('click', toggleMenu);

for (let i = 0; i < elemMenu.length; i+=1) {
  elemMenu[i].addEventListener('click', toggleMenu);
}

