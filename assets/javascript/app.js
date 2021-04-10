/* var div = document.querySelector(".destacados__container"); */
/* var nav = document.querySelector("nav"); */

// sorting images
/* function updateSort(el) {
  var scrollWidth = el.scrollWidth;
  var scrollLeft = el.scrollLeft;
  var width = el.offsetWidth;
  var items = el.children;

  if (scrollLeft <= width) {
    el.prepend(items[items.length - 1]);
    el.scrollLeft = scrollLeft + width;
  }
  if (scrollWidth - scrollLeft <= width) {
    el.append(items[0]);
    el.scrollLeft = scrollLeft - width;
  }
}

var lastscroll;
div.addEventListener("scroll", function() {
  var el = this;

  if (lastscroll) {
    clearTimeout(lastscroll);
  }
  lastscroll = setTimeout(function() {
    updateSort(el);
  }, 50);
  setActive(el);
});

 */



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
/*     pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, */
/*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  });


  var swiper = new Swiper('.enVivo', {
    slidesPerView: 2,
    /* width: 200, */
    spaceBetween: 10,
   /*  centeredSlides: true, */
    loop: true,
/*     pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, */
/*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  });