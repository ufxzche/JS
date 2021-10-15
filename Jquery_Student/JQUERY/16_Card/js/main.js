$(document).ready(function () {
    $('.input-cart-number').on('input', function(){
        $('.number span:nth-child(' + $(this).index() + ')').html($(this).val());

        if($(this).val().length > 3){
            $(this).next().focus();
        }
        if($(this).val().length < 1){
            $(this).prev().focus();
        }

    });

    $('#card-holder').on('input', function(){
        $('.card-holder').html($(this).val());
    });

    $('#card-expiration-month').on('input', function(){
        $('.card-expiration-date .month').html($(this).val() + "/");
    })

    $('#card-expiration-year').on('input', function(){
        $('.card-expiration-date .year').html($(this).val());
    })

    $('#card-ccv').on('focus', function(){
        $('.credit-card-box .flip').addClass('credit-card-box-active');
    })
    $('#card-ccv').on('blur', function(){
        $('.credit-card-box .flip').removeClass('credit-card-box-active');
    })
    $('#card-ccv').on('input', function(){
        $('.ccv div').html($(this).val());
    })
});