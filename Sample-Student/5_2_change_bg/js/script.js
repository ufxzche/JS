window.addEventListener('load',function(){
    let nav = this.document.querySelector('nav');
    let btn = this.document.querySelectorAll('.btn');
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click',function(){
           let color =  this.getAttribute('data-color');
           nav.style.background = color;
           console.log(color);
        })
    }
    console.log(nav);
    console.log(btn);
})