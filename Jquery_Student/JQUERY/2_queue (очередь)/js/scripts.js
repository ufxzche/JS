$(document).ready(function () {
    $('.ask').on('click', function () { 
        let answer = $(this).next();
        $('.answer').not(answer).slideUp(1000)
        $(this).next().slideToggle(1000);
     })
});