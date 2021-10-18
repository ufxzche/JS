// let lines = +prompt('Qator kiriting: ');
// let star = '';

// let i = 1;

// while (i <= lines) {
//     star = star + '*';
//     document.write(star + '<br>');
//     i++;
// }

// ========================================

// let i = 0;

// do{
//     document.write(i + '<br>');
//     i++;
// }while (i < 10);

// ======================================== HW

// let lines = +prompt('Qator kiriting: ');
// let star = '';

// for (let i = 0; i < lines; i++) {
//     star = star + '*';
//     document.write(star + '<br>'); 
// }

// let qoymasaham bo'ladi

// ========================================

// for (i = 1; i < 20; i++) 
// {
//     if(i % 2 === 0)
//     {
//         document.write(i + " soni juft son<br>")
//     } 
//     else  
//     {
//         document.write(i + " soni toq son<br>")
//     } 
// }

// ========================================

// let i = 1;

// while (i <= 10) {
//     if(i % 2 === 0)
//     {
//         document.write(i + " soni juft son<br>")
//     } 
//     else  
//     {
//         document.write(i + " soni toq son<br>")
//     }
//     i++;
// }

// ========================================

let oy = +prompt('oyni kiriting');
let res;

if( oy !== 0 && oy <= 2 || oy == 12)
{
    res = 'Qish';
}
else if (oy >= 3 && oy <= 5)
{
    res = 'Bahor';
}
else if (oy >= 6 && oy <= 8)
{
    res = 'Yoz';
}
else if (oy >= 9 && oy <= 11)
{
    res = 'Kuz';
}
else 
{
    res = 'Bunday oy mavjud emas!';
}

document.write(res);