
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
