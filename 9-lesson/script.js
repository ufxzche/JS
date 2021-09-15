// product

// let elProductName = document.querySelector('.productName')
// let elBtnLeft = document.querySelector('.btnLeft');
// let elBtnRight = document.querySelector('.btnRight');
// let elproductIndex = document.querySelector('.productIndex');
// let elBtnRemove = document.querySelector('.btnRemove');
// let elproductList = document.querySelector('.productList');

// let basket = [];

// elBtnLeft.addEventListener('click', function () {
//     if(elProductName.value){
//         if(basket.indexOf(elProductName.value) == -1){
//             basket.unshift(elProductName.value);
//             elproductList.innerHTML = basket.join('<br>');
//             elProductName.value = '';
//             elProductName.focus();
//         }else{
//             alert('Bunday product mavjud!');
//         }
//     }
//     else{
//         alert('Product nomini kiriting!');
//     }
// });

// elBtnRight.addEventListener('click', function () {
//     if(elProductName.value){
//         if(basket.indexOf(elProductName.value) == -1){
//             basket.push(elProductName.value);
//             elproductList.innerHTML = basket.join('<br>');
//             elProductName.value = '';
//             elProductName.focus();
//         }else{
//             alert('Bunday product mavjud!');
//         }
//     }
//     else{
//         alert('Product nomini kiriting!');
//     }
// });

// elBtnRemove.addEventListener('click', function () {
//     if(elproductIndex.value){
//         var IndexToRemove = parseInt(elproductIndex.value, 10);
//         if(IndexToRemove >= 0 && IndexToRemove <= basket.length){
//             basket.splice(IndexToRemove, 1);
//             elproductList.innerHTML = basket.join('<br>');
//             elproductIndex.value = '';
//             elproductIndex.focus();
//         }else{
//             alert('kiritgan id bazada yoq')
//         }
//     }
//     else{
//         alert('Product idni kiriting!');
//     }
// });


// ========== BTN ==========

let elbtnClick = document.querySelector('.btnClick');

elbtnClick.onclick = function () {
    elbtnClick.style.background = 'red';
}

elbtnClick.onmouseover = function () {
    elbtnClick.style.background = 'blue';
}

elbtnClick.onmouseout = function () {
    elbtnClick.style.background = 'yellow';
}

elbtnClick.ondblclick = function () {
    elbtnClick.style.background = 'grey';
}