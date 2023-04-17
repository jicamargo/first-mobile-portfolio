const BurguerMenu = document.getElementById('BurguerMenu')
const slideMenu = document.getElementById('slidemenu')
const elemMenu = document.querySelectorAll('#slidemenu a')

function toggleMenu () {
  slideMenu.classList.toggle('active')
}

BurguerMenu.addEventListener('click', toggleMenu)

for (let i = 0; i < elemMenu.length; i + 1) {
  elemMenu[i].addEventListener('click', toggleMenu)
}
