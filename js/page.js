$(document).ready(function() {
    $('.tour-slider').owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    })

})