$( document ).ready(function() {
    $('.fairy-tail-slider').slick({
        fade:true,
        autoplay:true,
        autoplaySpeed: 2000,
        nextArrow: `<div class="arrow-faityteil-next"></div>`,
        prevArrow: `<div class="arrow-faityteil-prev"></div>`,

        responsive: [
            {
                breakpoint:601,
                settings: {
                    arrows:false
                }
            }
    ]

});

    $('.our-trip-slider').slick({
        fade:true,
        autoplay:true,
        autoplaySpeed: 2000,
        nextArrow: `<div class="arrow-ourtrip-next"></div>`,
        prevArrow: `<div class="arrow-ourtrip-prev"></div>`,

        responsive: [
            {
                breakpoint:601,
                settings: {
                    arrows:false
                }
            }
        ]

});

$("[data-fancybox]").fancybox({
    loop: true
     });
$('.button-booking, .nav-link').click(function() {
    $('html, body').animate({
scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
        duration: 1000,
        easing: 'swing'
    });
return false;
});
});
