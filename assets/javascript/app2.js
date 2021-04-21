(function() {

  'use strict';

  const breakpoint = window.matchMedia( '(min-width: 500px)' );
  const breakpoint_02 = window.matchMedia( '(max-width: 999px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    mySwiper = new Swiper ('.enVivo', {

      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      height: 170,

      breakpoints: {

        250: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false,
          height: 170,
          loop: true,
        },
        
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: false,
          height: 170,
          loop: true,
        },

        600: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: false,
          height: 170,
          loop: true,
        },
    
        750: {
          slidesPerView: 4,
          spaceBetween: 10,
          centeredSlides: false,
          height: 170,
          loop: true,
        },

        1000: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          centeredSlides: false,
          height: 170,
          loop: false,
        },
        
      },

/*         //a11y: true,
      grabCursor: true,

      // pagination
      pagination: '.swiper-pagination',
      paginationClickable: true, */

    });
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


  breakpoint_02.addEventListener( "change", (e) => {
    if (e.matches) {
    /* the viewport is 600 pixels wide or less */
      enableSwiper();
      console.log('YA PRENDIO - This is a narrow screen — less than 600px wide.')
    }else {
    /* the viewport is more than than 600 pixels wide */
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      console.log('APAGADO - This is a wide screen — more than 600px wide. ')
    }
  });

  document.addEventListener( "DOMContentLoaded", () => {

    if (window.matchMedia("(min-width: 998px)").matches) {
      /* La pantalla tiene al menos 400 píxeles de ancho */
      console.log('nel');
    } else {
      enableSwiper();
      console.log('TA PRENDIDA LA WEA');
    }

  });
  


})();