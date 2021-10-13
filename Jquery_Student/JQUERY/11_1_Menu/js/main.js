$(document).ready(function () {
    $('.menu-link').click(function(){
        console.log(1);
        $('menu').animate({
            left: 555
        })
    })
    $('.close-btn').click(function(e){
        e.preventDefault();

        $('menu').animate({
            left: 0 
        })
    })

});