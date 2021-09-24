window.addEventListener('load',function(){
    let form = this.document.querySelector('form');
    let input = this.document.querySelectorAll('input');
    form.addEventListener('submit',function(e){
        for(let i = 0; i < input.length; i++){
            if(input[i].value == ''){
                input[i].classList.add('error');
                e.preventDefault();
            }
            
        }
     
    })

    console.log(input);
    console.log(form);
})