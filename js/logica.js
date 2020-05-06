// Animaciones Js
AOS.init();

// Menu Lateral
$('#boton-menu').on('click', function () {
    $('nav').toggleClass('nav-lateral');
});
    
// Boton Go-Top
$('#go-top').on('click', function () {
    $('html, body').animate ({
        scrollTop: 0,
    }, 1000);
    return false;
});

// Desplazamiento entre Secciones
var scrolLink = $('.nav-link');

scrolLink.on('click', function () { // Contactos
    $('html, body').animate ({
        scrollTop: $(this.hash).offset().top
    }, 1000);
    return false;
});









