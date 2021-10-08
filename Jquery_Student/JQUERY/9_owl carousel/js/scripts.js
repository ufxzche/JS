$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        mouseDrag: true,
        nav: true,
        navText: ['prev', 'next'],
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            320:{
                items: 1,
                nav: true,
            },
            576:{
                items: 2,
                nav: false,
            },
            992:{
                items: 3,
                nav: false,
            }
        }
    })
});