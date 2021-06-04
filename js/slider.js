$('.owl-banner').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fal fa-arrow-circle-left'></i>", "<i class='fal fa-arrow-circle-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})