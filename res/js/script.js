$(function() {
    $(' .navbar-toggler ').click(function() {
        $(' .navbar-toggler ').toggleClass(' change ')
    });
});

$(window).scroll(function() {
    let position = $(this).scrollTop()
    if(position >= 160){ 
        $('nav').addClass('custom-navbar')
        .removeClass('nav-menu');
    } else{
        $('nav').addClass('nav-menu')
        .removeClass('custom-navbar');
    }
})

