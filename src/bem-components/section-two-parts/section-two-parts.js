'use strict';

const block = 'section-two-parts';

const elems = {
    photoSlider: block + '__photo-slider',
    textSlider: block + '__text-slider',
    sliderList: block + '__slider-list',
    sliderItem: block + '__slider-item',
    arrowPrev: block + '__arrow-prev',
    arrowNext: block + '__arrow-next'
};

$(document).ready(function () {
    const $block = $('.' + block),
        $photoSlider = $block.find('.' + elems.photoSlider),
        $textSlider = $block.find('.' + elems.textSlider),
        $photoSliderList = $photoSlider.find('.' + elems.sliderList),
        $textSliderList = $textSlider.find('.' + elems.sliderList),
        $photoArrowPrev = $photoSlider.find('.' + elems.arrowPrev),
        $textArrowPrev = $textSlider.find('.' + elems.arrowPrev),
        $photoArrowNext = $photoSlider.find('.' + elems.arrowNext),
        $textArrowNext = $textSlider.find('.' + elems.arrowNext),
        $photoSliderItem = $photoSlider.find('.' + elems.sliderItem),
        $textSliderItem = $textSlider.find('.' + elems.sliderItem);

    $photoSliderList.on('afterChange', function () {
        if ($photoSliderList.slick('slickCurrentSlide') !== 0) {
            showArrowPrev($photoSlider, elems.arrowPrev);
        } else {
            hideArrowPrev($photoSlider, elems.arrowPrev);
        }

        if ($photoSliderItem.last().hasClass('slick-active')) {
            hideArrowNext($photoSlider, elems.arrowNext);
        } else {
            showArrowNext($photoSlider, elems.arrowNext);
        }
    });

    $textSliderList.on('afterChange', function () {
        if ($textSliderList.slick('slickCurrentSlide') !== 0) {
            showArrowPrev($textSlider, elems.arrowPrev);
        } else {
            hideArrowPrev($textSlider, elems.arrowPrev);
        }

        if ($textSliderItem.last().hasClass('slick-active')) {
            hideArrowNext($textSlider, elems.arrowNext);
        } else {
            showArrowNext($textSlider, elems.arrowNext);
        }
    });

    $photoSliderList.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: true,
        prevArrow: $photoArrowPrev,
        nextArrow: $photoArrowNext,
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

    $textSliderList.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $textArrowPrev,
        nextArrow: $textArrowNext,
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

    function hideArrowPrev($parrent, arrowPrev) {
        $parrent.find('.' + arrowPrev).css({"opacity": "0", "cursor": "auto"});
    }

    function showArrowPrev($parrent, arrowPrev) {
        $parrent.find('.' + arrowPrev).css({"opacity": "1", "cursor": "pointer"});
    }

    function hideArrowNext($parrent, arrowNext) {
        $parrent.find('.' + arrowNext).css({"opacity": "0", "cursor": "auto"});
    }

    function showArrowNext($parrent, arrowNext) {
        $parrent.find('.' + arrowNext).css({"opacity": "1", "cursor": "pointer"});
    }
});