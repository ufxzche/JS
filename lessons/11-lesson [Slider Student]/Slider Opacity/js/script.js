let image = document.querySelectorAll('.slider_img img');
let elBtnPrev = document.querySelector('.btnPrev');
let elBtnNext = document.querySelector('.btnNext');

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

console.log(image);
console.log(elBtnPrev);
console.log(elBtnNext);

function next()
{
    image[i].style.display = 'none';

    i++;
    if(i >= image.length){
        i = 0;
    }
    image[i].style.display = 'block';
    console.log(i); // test log
}

setInterval( next, 2000);

function stop(){
    
}

function start(){

}