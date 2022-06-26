$(function () {
    $('.main_slider').slick({
        // arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.main_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    })

})//the end