$(document).ready(function () {
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();

        if(scroll > 300){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
        console.log(scroll);
    })

    $('#top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

});