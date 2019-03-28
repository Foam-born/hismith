'use strict';

const block = 'section-questions';

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

    $sliderList.on('afterChange', function () {
        if ($sliderList.slick('slickCurrentSlide') !== 0) {
            showArrowPrev();
        } else {
            hideArrowPrev();
        }

        if ($sliderItem.last().hasClass('slick-active')) {
            hideArrowNext();
        } else {
            showArrowNext();
        }
    });

    $sliderList.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $arrowPrev,
        nextArrow: $arrowNext
    });

    function hideArrowPrev() {
        $arrowPrev.css({"opacity": "0", "cursor": "auto"});
    }

    function showArrowPrev() {
        $arrowPrev.css({"opacity": "1", "cursor": "pointer"});
    }

    function hideArrowNext() {
        $arrowNext.css({"opacity": "0", "cursor": "auto"});
    }

    function showArrowNext() {
        $arrowNext.css({"opacity": "1", "cursor": "pointer"});
    }
});