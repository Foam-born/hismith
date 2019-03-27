'use strict';

const block = 'section';

const elems = {
    sliderList: block + '__slider-list',
    sliderItem: block + '__slider-item',
    arrowPrev: block + '__arrow-prev',
    arrowNext: block + '__arrow-next'
};

const mods = {
    sliderScreen: block + '--slider-screen'
};

$(document).ready(function () {
    const $block = $('.' + block),
          $sliderScreen = $('.' + mods.sliderScreen),
          $sliderList = $sliderScreen.find('.' + elems.sliderList),
          $arrowPrev = $sliderScreen.find('.' + elems.arrowPrev),
          $arrowNext = $sliderScreen.find('.' + elems.arrowNext),
          $sliderItem = $sliderScreen.find('.' + elems.sliderItem);



    $sliderList.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $arrowPrev,
        nextArrow: $arrowNext,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


});