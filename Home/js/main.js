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





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))





$(window).scroll(() => {
    let scrollTop = $(window).scrollTop()

    if (scrollTop > 10) {
        $('.navContainer').css('transform', 'translateY(-55px)')
    }
    else {
        $('.navContainer').css('transform', 'translateY(0)')

    }
})



let swiperCards = new Swiper('.card_content', {
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
        600: {
            slidesPerView: 2
        },
        968: {
            slidesPerView: 3
        },

    }

});

let swiperCards2 = new Swiper('.card_content2', {
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
        600: {
            slidesPerView: 2
        },
        968: {
            slidesPerView: 3
        },

    }

});

let swiperCards3 = new Swiper('.card_content3', {
    // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination3',
        // dynamicBullets: true
    },

    autoplay: {
        delay: 5000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        968: {
            slidesPerView: 2
        },

    }

});

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
        600: {
            slidesPerView: 2
        },
        993: {
            slidesPerView: 3
        },
        1201: {
            slidesPerView: 4
        },

    }

});