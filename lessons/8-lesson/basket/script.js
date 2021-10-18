// product

let elProductName = document.querySelector('.productName')
let elBtnLeft = document.querySelector('.btnLeft');
let elBtnRight = document.querySelector('.btnRight');
let elproductIndex = document.querySelector('.productIndex');
let elBtnRemove = document.querySelector('.btnRemove');
let elproductList = document.querySelector('.productList');

let basket = [];

elBtnLeft.addEventListener('click', function () {
    if(elProductName.value){
        basket.unshift(elProductName.value);
        elproductList.innerHTML = basket.join('<br>');
    }
    else{
        alert('Product nomini kiriting!');
    }
});