let image = document.querySelectorAll('.slider_img img');
let elBtnPrev = document.querySelector('.btnPrev');
let elBtnNext = document.querySelector('.btnNext');
let slider = document.querySelector('.slider');

let i = 0;

elBtnNext.onclick = function(){
    image[i].style.display = 'none';

    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.display = 'block';
    console.log(i); // test log
}


elBtnPrev.onclick = function(){
    image[i].style.display = 'none';

    i--;
    if(i < 0){
        i = image.length - 1;
    }
    image[i].style.display = 'block';
    console.log(i); // test log
}

// console.log(image);
// console.log(elBtnPrev);
// console.log(elBtnNext);

function hello() {
    alert('hello');
}

// setTimeout(hello, 1000);
// let fun = setInterval(hello, 1000); 

// clearInterval(fun);
function sliderNext(){
    image[i].style.display = 'none';

    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.display = 'block';
    console.log(i); // test log
}

let int = setInterval(sliderNext, 1000);

function start(){
    return int = setInterval(sliderNext, 1000);
}

function stop(){
    clearInterval(int);
}

slider.onmouseover = function(){
    stop();
}

slider.onmouseout = function(){
    start();
}