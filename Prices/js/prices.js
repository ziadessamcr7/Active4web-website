
let swiperCards4 = new Swiper('.card_content4', {
    // Optional parameters
    loop: false,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },

    }

});


$(window).scroll(() => {
    let scrollTop = $(window).scrollTop()

    if (scrollTop > 10) {
        $('.navContainer').css('transform', 'translateY(-55px)')
    }
    else {
        $('.navContainer').css('transform', 'translateY(0)')

    }
})



$(window).scroll(function () {

    let scrollTop = $(window).scrollTop()

    console.log(scrollTop);


    if (scrollTop > 100) {
        $('#btnUp').fadeIn(300)
    }
    else {
        $('#btnUp').fadeOut(300)

    }
});

$('#btnUp').click(function () {
    $('html').animate({ scrollTop: 0 }, 100)
})