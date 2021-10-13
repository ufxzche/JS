$(document).ready(function () {
    let $link = $('.menu a');
    console.log($link);

    $link.click(function(e){
        e.preventDefault();

        $($link).removeClass('active');
        
        let id = $(this).addClass('active').attr('href');
        let target = $(id).offset().top -60;
        console.log(target);

        console.log(id);


        $('html,body').animate({
            scrollTop: target
        }, 1000)
    })

    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        console.log(scroll);

        $link.each(function(){
            var target = $(this).attr('href');
            var selector = $(target).offset().top - 60;

            if(scroll >= selector){
                $link.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
});