let consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

let $burguerButton = document.getElementById('burguer-button');
let $menu = document.getElementById('menu');
function toggleMenu(){
  $menu.classList.toggle('active')
};
function showMenu(){
  $menu.classList.add('active')
};

function hideMenu(){
  $menu.classList.remove('active')
};

function mediaQuery() {
  if (consulta.matches) {
    // si se cumple hagamos esto
    console.log('se cumplió la condicion');
    $burguerButton.addEventListener('touchstart', toggleMenu);
  } else {
    $burguerButton.removeEventListener('touchstart', toggleMenu);
    // si no se cumple hagamos esto
    console.log('no se cumplió la condicion');
  }
}
mediaQuery();

// lazy loading
let bLazy = new Blazy({
    selector: 'img'
});
// $burguerButton.addEventListener('touchstart', toggleMenu);

// function toggleMenu(){
//   $menu.classList.toggle('active')
// };
// gestos touch
let $body = document.body;

let gestos = new Hammer($body);

gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);
