$(document).ready(function() {


    /* ---- Destination - pages ---- */
    $('.tour-slider').owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    })

    $(".nav-next").click(function() {
        $(this).parents(".tour-slider").find(".owl-next").click();
    });

    $(".nav-prev").click(function() {
        $(this).parents(".tour-slider").find(".owl-prev").click();
    });

    /* Incentives - pages */
    $('.indes__avatar').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        nav: false,
        dots: false,
        URLhashListener: true,
        startPosition: 'URLHash'
    });

    $('.indes__thumb').owlCarousel({
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        margin: 10,
        nav: false,
        dots: false
    })

    $('.indes__thumb .item').click(function() {
        $(this).parents(".indes__thumb").find(".item").removeClass("b-white");
        $(this).addClass("b-white");
    })


    /* Experiences datial page */


    $(function() {
        $('#arrival_date').daterangepicker({
            singleDatePicker: true,
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });
        $('#arrival_date').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
        });

        $('#arrival_date').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
    });
})