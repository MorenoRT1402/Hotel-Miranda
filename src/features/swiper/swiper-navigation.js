const swiperNavigation = new Swiper('.swiper-navigation', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1000: {
            slidesPerView: 1.95,
            spaceBetween: 30,
            loop: false,
        },
      },
});