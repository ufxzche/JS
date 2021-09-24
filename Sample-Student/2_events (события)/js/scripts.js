window.onload = function(){
    let text = document.querySelector('.text');

    // text.onclick = function(){
    //     text.style.background = "red";
    // }

    // text.onclick = function(){
    //     text.style.color = "blue";
    // }


    text.addEventListener('click',bgColor);
    text.addEventListener('click',color);

    function bgColor(){
            text.style.background = 'red';
    }

    function color(){
        text.style.color = 'blue';
    }


    console.log(text);
}