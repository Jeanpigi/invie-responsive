let $burguerButton = document.getElementById('burguer-button');
let $menu = document.getElementById('menu');

const toggleMenu = () => $menu.classList.toggle('active')

$burguerButton.addEventListener('touchstart', toggleMenu);
