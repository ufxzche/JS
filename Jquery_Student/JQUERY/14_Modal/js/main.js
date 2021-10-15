$(document).ready(function () {
    $modal = $('.popup');
    $overlay = $('.overlay');
    $btn = $('.btn');
    $close = $('.close-btn');
    $phone = $('.phone')

    $btn.click(function(){
        $overlay.show();
        $modal.addClass('popup_active');
        $($phone).html($(this).html());
    })

    $close.click(function(){
        $overlay.hide();
        $modal.removeClass('popup_active');

    })


});