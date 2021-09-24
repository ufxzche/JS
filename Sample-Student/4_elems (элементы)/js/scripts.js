window.addEventListener('load',function(){
    let div = this.document.querySelectorAll('.text');
    let color = ['red','green','blue','black','yellow','pink'];
    console.log(color);
  for(i = 0; i < div.length; i++ ){
        div[i].addEventListener('click',function(){
            let rand = Math.floor(Math.random() * color.length);
            console.log(rand);
            this.style.background = color[rand];
        })
    }
    console.log(div);
})