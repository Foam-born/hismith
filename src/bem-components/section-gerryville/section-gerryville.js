'use strict';

const block = 'section-gerryville';

const elems = {
    sliderList: block + '__slider-list',
    sliderItem: block + '__slider-item',
    arrowPrev: block + '__arrow-prev',
    arrowNext: block + '__arrow-next',
    text: block + '__slide-text'
};

$(document).ready(function () {
    const $block = $('.' + block),
        $sliderList = $block.find('.' + elems.sliderList),
        $arrowPrev = $block.find('.' + elems.arrowPrev),
        $arrowNext = $block.find('.' + elems.arrowNext),
        $sliderItem = $block.find('.' + elems.sliderItem);

    $sliderList.on('afterChange', function () {
        let $passiveSlides = $('.' + elems.sliderItem + ':not(.slick-active)'),
            $activeSlides = $('.' + elems.sliderItem + '.slick-active');

        $passiveSlides.css({'opacity': '.4'});
        $activeSlides.css({'opacity': '1'});

        $passiveSlides.find('.' + elems.text).hide();
        $activeSlides.find('.' + elems.text).show();
    });



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