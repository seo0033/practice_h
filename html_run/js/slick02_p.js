$(function () {

    $('.main_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.box ul li').eq(c).addClass('on').siblings().removeClass('on')
        $('.box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount);
    });

    $('.main_slider').slick({
        centerMode: true,
        centerPadding: '200px',
        arrows: false,
        dots: true,
    });
    $('.slide_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.slide_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    $('.left_slide').slick({
        arrows: false,
    });
    $('.right_slide').slick({
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.left_slide',
    });

    $('.slide02 .right i:nth-child(1)').on('click', function () {
        $('.right_slide').slick('slickPrev')
    });
    $('.slide02 .right i:nth-child(2)').on('click', function () {
        $('.right_slide').slick('slickNext')
    });

});//the end