$(document).ready(function ($) {
    "use strict";

    /* responsive navigation */

    $(window).resize(function () {
        if ($(window).width() > 975) {
            $('#menu').removeAttr('style');
            $('#menu-btn i').removeClass('rotate');
        }
    });

    $('#menu-btn .fa-bars').click(function () {
        $('#menu-btn i').toggleClass('rotate');
        $('#menu').slideToggle();
        $('#submenu').css('display', 'none');
    });


    $('#menu li').click(function () {

        if ($(window).width() > 975) {
            $(this).find('#submenu').toggle();
        } else {
            $(this).find('#submenu').slideToggle();
        }

        $('.fa-angle-down').toggleClass('rotate');
    });

    /* sidebar */

    $('#sidebar button').click(function () {
        $('#social-media').toggleClass('hide');
    });


    /* fixed nav */

    var ofTop = $('#scroll-fixed').offset().top;
    var navH = $('#scroll-fixed').outerHeight(); //82

    $(window).scroll(function () {
        var sTop = $(window).scrollTop();

        if (sTop >= ofTop) {
            $('#scroll-fixed').addClass('scroll-fixed');
            $('#wrapper').css('margin-top', navH);
        } else {
            $('#scroll-fixed').removeClass('scroll-fixed');
            $('#wrapper').css('margin-top', '0');
        }
    });

    /* animate to Top */

    $('#go-top a').on('click', function (e) {

        e.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - navH
        }, 200);
    });

    //drugi nacin 
    /*
    $('#go-top a').click(function (e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });
    */
});
