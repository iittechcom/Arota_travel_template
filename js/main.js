$(document).ready(function() {
    /* Using custom settings */
    function goToByScroll(id) {

        $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 50
            },
            'slow');
    }

    $("#scroll > ul > li > a").click(function(e) {

        e.preventDefault();


        goToByScroll($(this).data('sec'));
    });

});

//scroll menu
let scroll__menu = document.querySelector(".menu");
let height__scroll = 145;

function scroll_header() {
    if (window.pageYOffset > height__scroll) {
        scroll__menu.classList.add("fixed");
    } else {
        scroll__menu.classList.remove("fixed");
    }
}

window.onscroll = function() { scroll_header() }
    // hover menu about us
$(".drop-aboutus .item").hover(function() {
        $(this).toggleClass("active")
    })
    // $(".sroll-left li").hover(function() {
    //     $(this).toggleClass("active")
    // })
      //using document ready...
      $(document).ready(function(){

        //initialising fullpage.js in the jQuery way
        $('#fullpage').fullpage({
            navigation: true,
            slidesNavigation: true,
        });

    });