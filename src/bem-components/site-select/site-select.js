'use strict';

// import $ from "jquery";

const block = 'site-select';

$(document).ready(function () {
    const $block = $('.' + block);

    $block.each(function () {

        const classes = $(this).attr("class"),
              id = $(this).attr("id"),
              name = $(this).attr("name");

        let template = '<div class="' + classes + '">';

        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';

        template += '<div class="custom-options">';

        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });

        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });



    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });

    $(".custom-select-trigger").on("click", function () {
        $('html').on('click', function () {
            $block.removeClass("opened");
        });

        $(this).parents("." + block).toggleClass("opened");

        event.stopPropagation();
    });


    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents("." + block).removeClass("opened");
        $(this).parents("." + block).find(".custom-select-trigger").text($(this).text());
    });
});

