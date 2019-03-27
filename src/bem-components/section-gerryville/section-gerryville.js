'use strict';

const block = 'section-gerryville';

const elems = {
    sliderList: block + '__slider-list',
    sliderItem: block + '__slider-item',
    arrowPrev: block + '__arrow-prev',
    arrowNext: block + '__arrow-next'
};

$(document).ready(function () {
    const $block = $('.' + block),
        $sliderList = $block.find('.' + elems.sliderList),
        $arrowPrev = $block.find('.' + elems.arrowPrev),
        $arrowNext = $block.find('.' + elems.arrowNext),
        $sliderItem = $block.find('.' + elems.sliderItem);

    $sliderList.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
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