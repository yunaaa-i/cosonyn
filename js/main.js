let swiper = new Swiper(".main_visual", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".main_visual .swiper-button-next",
    prevEl: ".main_visual .swiper-button-prev",
  },
  scrollbar: {
    el: ".main_visual .swiper-scrollbar",
    hide: true,
  },

});  