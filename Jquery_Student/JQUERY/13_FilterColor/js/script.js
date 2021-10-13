$(document).ready(function () {
    
    function fColor(color){
        $('.color').filter('.' + color).slideDown();  // selector [id, class]
        $('.color').not('.' + color).slideUp();
    }

    $('.f-red').click(function(){
        fColor('red');
    })
    $('.f-blue').click(function(){
        fColor('blue');
    })
    $('.f-green').click(function(){
        fColor('green');
    })
    $('.f-all').click(function(){
        fColor('color');
    })
});