$(document).ready(function () {
    var menu = $('.burger-menu')
    menu.click(function(event) {
        $('.burger-menu,.header__nav').toggleClass('active');
    });
    $(document).click(function (event) {
        if (!menu.is(event.target)) {
            $('.burger-menu').addClass('active');
            $('.header__nav').removeClass('active');
        }
    });
});