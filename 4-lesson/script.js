// ============================

// let a = +prompt('Birinchi: ');
// let b = +prompt('Ikkinchi: ');
// let c = +prompt('Uchinchi: ');


// if ( a > b && a > c)
// {
//     alert(a)
// } 
// else if ( b > a && b > c )
// {
//     alert(b)
// }
// else if ( c > a && c > b )   
// {
//     alert(c);
// }
// else {
//     alert('hatolik');
// }


// =============================

// let a = 20;
// let b = 40;

// let s = a * b;

// console.log(s);

// =============================

// let a = +prompt('Birinchi tomoni:');
// let b = +prompt('Ikkinchi tomoni:');

// let s = a * b;

// alert(s);

// =============================

// <10 <18 <100 

// let age = +prompt('yoshingizni kiriting: ');
// let res;

// if (isNaN(age)){
//     res = 'son kiriting';
// }
// else if( age <= 10)
// {
//     res = 'salom kichkintoy';
// }
// else if( age <= 18 )
// {
//     res = 'salom mijoz';
// }
// else if ( age <= 100)
// {
//     res = 'salom bobo';
// }
// else {
//     res = 'qogani hali yoq';
// }

// alert(res);

// ======================================

// let login = prompt('Login kiriting:');
// let pass;

// if (login === 'admin')
// {
//     pass = +prompt('Parol kiriting');
//     if (pass === 123){
//         alert('Profilga kirildi!');
//     }else {
//         alert('Parol hato!');
//     }
// }else {
//     alert('Login hato');
// }

// ======================================

// let i = 0;

// while (i <= 10) {
//     document.write(i + '<br>');
//     i++;
// }

// ======================================

// let a = Math.pow(2,3);
// console.log(a);

// let num = +prompt('Son kiriting')
// let power = +prompt('Darajasini kiriting');

// let i = 1;
// let res = 1;

// while (i <= power) {
//     res = res * num;
//     i++;
// }

// alert(res);

// alert(num ** power);

// =========================================

let a = +prompt('Birinchi: '); // 7
let b = +prompt('Ikkinchi: '); // 8
let c = +prompt('Uchinchi: '); // 9

if (a > b && a < c)
{
    alert(a);
}
else if (b > a && b < c)
{
    alert(b);
}
else if (c > a && c < b)
{
    alert(c);
}
else {
    alert('hatolik');
}