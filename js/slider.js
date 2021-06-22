$('.owl-banner').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin:0,
    stagePadding:0,
    navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
        1900:{
            items:1
        }
    }
})
$('.owl-destination').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
            margin: -5,
            stagePadding: 190,
        }
    }
})
$('.owl-experience').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
            center: true,
        },
        991: {
            items: 2,
            margin: 15,
            stagePadding: 120,
            center: true,
        },
        1200: {
            items: 2,
            margin: 15,
            stagePadding: 120,
            center: true,
        },
        1440: {
            items: 4,
            margin: 15,
            stagePadding: 0,
            center: true,
        }
    }
})
$('.owl-ecotourism_image').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    items:1,
   
   
})
$('.owl-ecotourism_content').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    URLhashListener:true,
    autoplayHoverPause:true,
    navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
    items:1,
   
   
})


