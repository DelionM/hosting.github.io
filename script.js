//  arvioj: esta funcion oculta el menu hamburguesa
function cambiarClase() {
    var siteNav = document.getElementById("nav");
    siteNav.classList.toggle("site-nav-open");
    var menuOpen = document.getElementById("menu-toggle");
    siteNav.classList.toggle("menu-Open");
}

let menuVisible = false;

//funcion que oculat o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //ocultar despues de seleccionar
    document.getElementById("nav").classList="";
        menuVisible = false;
}

const responsive = document.querySelector('.responsive');
document.addEventListener('click', function(event) {
  if (!responsive.contains(event.target)) {
    menu.style.display = 'none';
  }
});