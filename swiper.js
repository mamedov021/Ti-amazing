var swiper1 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".portfolio-swiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true,
  },
  loop: true,
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
 
});

