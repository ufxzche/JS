$(document).ready(function () {
    $('.answer').on('click', function(){
        $(this).animate({
            opacity: 0.5,
            width: '500px',
            marginLeft: '100px'
        }, 600).animate({
            opacity: 1,
            width: '700px',
            marginLeft: '200px'
        }, 500).animate({
            opacity: 0.5,
            width: '200px',
            marginLeft: '0px'
        }, 400)
    })
});