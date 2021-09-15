// ============= DOM =============
// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     document.body.classList.toggle('bg');    
// })

// =============

// let text = document.querySelector('p');
// console.log(text);

// =============

// let h1 = document.querySelector('#h1');
// console.log(h1);

// =============

// let btn = document.getElementsByClassName('btn');
// console.log(btn);

// =============

// let h1 = document.getElementById('h1');
// console.log(h1);

// =============

// let text = document.querySelectorAll('p');
// console.log(text);

// =============

let elBtn = document.querySelector('.btn');
let text = document.querySelectorAll('p');

elBtn.addEventListener('click', function () {
    for (let i = 0; i < text.length; i++) {
        text[i].style.color =  'red';
    }
});

// =============

// =============

// =============

// =============

// =============

// =============

