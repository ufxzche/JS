window.addEventListener('load',function(){
    let div = this.document.querySelectorAll('.text');

    for(i = 0; i < div.length; i++){
        div[i].addEventListener('click',function(){
            // let color = this.getAttribute('data-color');
            this.classList.toggle('active');

            // this.style.background = 'red';
            // this.style.color = 'blue';
            // this.style.fontSize = '20px';
            // this.style.opacity = 0.5;

            console.log(color);
        })
    }




    console.log(div);

})