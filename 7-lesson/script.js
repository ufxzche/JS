// massiv | array | to'plam

// 1 o'lchamlik massiv
// let array = [1,2,3,4,5];
// console.log(array);

// let num = ['один', 'два', 'три'];
// console.log(num);

// 2 o'lchamlik massiv

// let nums = [
//     ['bir', 'ikki', 'uch'],
//     ['to'rt.', 'besh', 'olti']
// ];

// console.log(nums[0][1]); // massivdi ichidan kerak bo'ganini tanlab chiqarish
// console.log(nums);


// ===========================

// let market = [];

// push() - massivga oxiridan element qo'shadi
// pop() - massivni oxirgi elementini o'chiradi
// unshift() - massivni boshidan element qo'shadi
// shift() - massivni boshdagi elementini o'chiradi
// slice() - massivni tanlangan elementidan keingi elementlar chiqadi
// splice(2,1) - massivni nechidan boshlab nechta element o'chirishi yoziladi
// splice(2,1,'Text') - massivni nechidan boshlab nechta element ochirishini aytib kein uni o'rniga yangi element qoshish


// object

// let book = {
//     title: 'Html',
//     author: 'John',
//     price: 100,
//     id: 2,
//     func: function () {
//         console.log('hi');
//     }
// };

// console.log(book.title + "\n" + book.author + "\n" + book.price);
// book.func();


// DOM
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    document.body.classList.toggle('bg');    
})