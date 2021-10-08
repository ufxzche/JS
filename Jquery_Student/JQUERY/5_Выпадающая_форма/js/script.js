$(document).ready(function () {
    $('#search').on('click', function(){
        $('.search').animate({
            top: 0,
        }, 500)
    })
    $('#close').on('click', function(){
        $('.search').animate({
            top: '-150px',
        }, 500)
    })
});