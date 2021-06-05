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