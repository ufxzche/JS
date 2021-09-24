window.addEventListener('load',function(){
    let input = this.document.querySelector('input');
    let btn = this.document.querySelector('.btn');

    btn.addEventListener('click',function(){
        if(input.type == 'password'){
            input.type = 'text';
            btn.innerHTML = 'sekret parol';
        }else{
            input.type = 'password';
            btn.innerHTML = 'Показать пароль';
        }
    })

    console.log(btn);
    console.log(input);
})