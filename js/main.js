$(document).ready(() => {

  // Cambiar tema al iniciar el sitio
  cambiarTema();

  // PopUp

  $("#mondongo").hide();
  $('#descargar-cv').click(() => {
    $('#mondongo').dialog();
  });

  // Modo Oscuro / Claro

  $('.switchOscuro').click(() => {
    console.log('hola')
    localStorage.setItem('temaOscuro', !$(':root').hasClass('modo-oscuro'));
    cambiarTema();
  });

  // Animacion del layout

  animacionLayout();

  $('.menu__link').on('click', function (ev) {
    ev.preventDefault();

    $('.layout').animate({
      left: '1500px',
    }, 600, () => {
      location.href = $(this).attr('href');

    });
  });

  // Arrow up
  $('#arrowUp').on('click', function () {
    $('.content__page').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // Menu hamburguesa

  $('.hamburger-wrapper').on('click', () => {
    $('.hamburger-menu').toggleClass('animate');
    $('.mobile-menu-overlay').toggleClass('visible');
  });

  $('.mobile-menu-overlay > ul > li > a').on('click', () => {
    $('.hamburger-menu').removeClass('animate');
    $('.mobile-menu-overlay').removeClass('visible');
  });
});


const animacionLayout = () => {
  $('.layout').animate({
    left: '0',
  }, 1000);
}




const cambiarTema = () => {
  const temaOscuro = localStorage.getItem('temaOscuro') === 'true';
  console.log('funcion')
  $(':root').toggleClass('modo-oscuro', temaOscuro);
  if (temaOscuro) {
    console.log('oscuro true')
    $('.oscuro i').addClass('fa-sun').removeClass('fa-moon');
    $('.oscuro span').text('Modo Claro');
  } else {
    console.log('false')
    $('.oscuro i').addClass('fa-moon').removeClass('fa-sun');
    $('.oscuro span').text('Modo Oscuro');
  }
}




