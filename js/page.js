$(document).ready(function() {
    $(".city__title").click(function() {
        $(".city__icon .fas").attr("class", "fas fa-plus");
        $(this).find(".city__icon .fas").toggleClass("fa-minus fa-plus");
    });
})