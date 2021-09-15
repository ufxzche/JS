// let num = +prompt('Son kiriting:');

// if(num % 2){
//     alert(num + ' soni toq')
// }
// else {
//     alert(num + ' soni juft')
// }

// ============================================

let random = Math.floor(Math.random() * 150);

if(random % 5 === 0 && random % 3 === 0)
{
    console.log(random + ' soni 3 va 5 soniga bo\'linadi');
}
else if(random % 5 === 0)
{
    console.log(random + ' soni 5 ga bo\'linadi');
}
else if(random % 3 === 0)
{
    console.log(random + ' soni 3 ga bo\'linadi');
}else
{
    console.log(random + ' soni 3 va 5 soniga bo\'linmaydi');
}

// ============================================

// let a = +prompt('Birinchi sonni kiriting:');
// let b = +prompt('Ikkinchi sonni kiriting:');

// let x = 5;
// let array = [a, b];
// let closest = array.sort( (a, b) => Math.abs(x - a) - Math.abs(x - b) )[0];
// console.log(closest);