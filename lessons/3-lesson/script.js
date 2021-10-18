// document.write(name)

// let num1 = +prompt("birinchi sonni kiriting"); 
// let num2 = +prompt("ikkinchi sonni kiriting");
// let num3 = +prompt("uchinchi sonni kiriting");
// let num4 = +prompt("tortinchi sonni kiriting");

// alert(num1 * num2)




// let a = +prompt("birinchi sonni kiriting"); 
// let b = +prompt("ikkinchi sonni kiriting");

// if( a > b){
//     alert(a * b)
// }else{
//     alert(a + b)
// }


// ==== 2 ====

// let year = +prompt('2 JU qacon bo\'lgan?');
// let res;

// if(isNaN(year)){
//     res = "Harf emas son kiriting";
// }else if(year < 1941){
//     res = "Hali urish boshlanmagan";
// }else if (year > 1941) {
//     res = "Urish tugagan";
// }else {
//     res = "Javobingiz tog'ri";
// }

// alert(res);


// Math

let a = Math.pow(3,2); // darajaga oshiradi
console.log(a);


let b = Math.floor(4.7); // butun qismini oladi
console.log(b);


let c = parseInt(3.7); // butun qismini oladi
console.log(c);


let d = Math.round(5.4) // yaxlitlaydi
console.log(d);


let g = Math.floor(5 + Math.random() * 15);
console.log(g);


let f = Math.sqrt(64);
console.log(f);


let j = Math.abs(-9);
console.log(j);


// Mantiqiy operatorlar

// >, <, >=, <=, ==, ===

console.log('74' == 74); // true
console.log('74' === 74); // false

// yoki operatori || true ga qarab intiladi

// 0 (false)  0 (false) = 0 (false)
// 1 (true)  0 (false) = 1 (true)
// 0 (false)  1 (true) = 1 (true)
// 1 (true)  1 (true) = 1 (true)


// Va operatori && false ga qarab intiladi

// 0 (false)  0 (false) = 0 (false)
// 1 (true)  0 (false) = 0 (false)
// 0 (false)  1 (true) = 0 (false)
// 1 (true)  1 (true) = 1 (true)

//  emas operatori !
// 0 (false) = 1 (true)
// 1 (true) = 0 (false)