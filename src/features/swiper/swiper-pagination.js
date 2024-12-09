const swiperPagination = new Swiper('.swiper-pag', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
            slidesPerGroup: 3,
            loop: false,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            slidesPerGroup: 1,
            loop: true,
        },
    },
});

const swiperPaginationTwoVisibles = new Swiper('.swiper-pag--dt--two-visibles', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        768: {
            slidesPerView: 2,
            loop: false,
            spaceBetween: 20,
            pagination: false,
        },

        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            slidesPerGroup: 1,
            loop: true,
        },
    },
});
