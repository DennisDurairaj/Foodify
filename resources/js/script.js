$(document).ready(function () {

    /* Sticky nav */

    $('.js-features-section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px;'
    });

    /* Scroll effects */

    $('.js-scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-subscription').offset().top
        }, 1000);
    });

    $('.js-scroll-to-next').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-features-section').offset().top
        }, 1000);
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations */

    $('.js-waypoint-1').waypoint(function (direction) {
        $('.js-waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });


    $('.js-waypoint-2').waypoint(function (direction) {
        $('.js-waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js-waypoint-3').waypoint(function (direction) {
        $('.js-waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js-waypoint-4').waypoint(function (direction) {
        $('.js-waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });

    /* Mobile Nav button */

    $('.js-mobile-nav').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
});
