$(function () {
    $('.slider').slick({
        dots: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="../img/prev-arrov.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="../img/next-arrow.png" alt="">',
        infinite: false,
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu').toggleClass('active')
        $('.header__menu-btn').toggleClass('active')

    });
});