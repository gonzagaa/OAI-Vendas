
AOS.init(
  {
      duration: 1200,
  }
);

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          effect: "cube",
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
};

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
} else {
  // Remove as classes do carrossel para desktop
  document.querySelectorAll('.mySwiper4 .swiper, .mySwiper4').forEach(el => {
    el.classList.remove('swiper', 'mySwiper4');
  });

  document.querySelectorAll('.mySwiper4 .swiper-wrapper').forEach(el => {
    el.classList.remove('swiper-wrapper');
  });

  document.querySelectorAll('.mySwiper4 .swiper-slide').forEach(el => {
    el.classList.remove('swiper-slide');
  });
}