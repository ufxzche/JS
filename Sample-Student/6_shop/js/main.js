window.addEventListener('load',function(){
    let cart = this.document.querySelectorAll('.cart');
    let price = this.document.querySelector('.total b');

    for(let i  = 0; i < cart.length; i++){
        cart[i].addEventListener('click',function(){
            this.classList.toggle('cart-active');
            price.innerHTML = sum();
        })
    }


    function sum(){
        var sum = 0;
        for(let i = 0; i < cart.length;i++){
            if(cart[i].classList.contains('cart-active')){
                sum = sum + +cart[i].getAttribute('data-price');
            }
        }
        return sum;
    }



    console.log(price);
    console.log(cart);
})