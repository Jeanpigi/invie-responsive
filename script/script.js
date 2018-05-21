let $burguerButton = document.getElementById('burguer-button');
let $menu = document.getElementById('menu');
let consulta = window.matchMedia("(max-width: 500px)")
consulta.addListener(mediaQuery);

const toggleMenu = () => $menu.classList.toggle('active')

function mediaQuery() {
  if (consulta.matches) {
    console.log("se cumplio la condicción");
    $burguerButton.addEventListener('touchstart', toggleMenu);

  } else {
    console.log("no se cumplio la condicción");
    $burguerButton.removeEventListener('touchstart', toggleMenu);
  }
}

var bLazy = new Blazy({
  selector:'img'
});
