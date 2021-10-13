$(document).ready(function () {
    $('#small a').click(function(e){
        e.preventDefault();

        var $id = $(this).attr('href');
        console.log($id);

        // fadeOut - display none
        // fadeIn - display block

        $('#big img').fadeOut(function(){
            $(this).attr('src', $id).fadeIn();

        })
    })
});