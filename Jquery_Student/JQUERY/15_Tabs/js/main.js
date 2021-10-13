$(document).ready(function () {
    var $link = $('.nav a')
    // console.log($link);

    $link.click(function(e){
        e.preventDefault();

        $link.parent().removeClass('active');
        $(this).parent().addClass('active');

        var target = $(this).attr('href')
        console.log(target);

        $('.tab-pane').removeClass('active');
        $(target).addClass('active');
    })
});