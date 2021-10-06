window.addEventListener('load', function(){
    let input = this.document.querySelector('input');
    let li = this.document.querySelectorAll('.list-group-item');

    input.addEventListener('input', function(){
        let filter = input.value.toLowerCase();

        for(i = 0; i < li.length; i++){
            let city = li[i].innerHTML;
            city = city.toLowerCase();
            
            if(city.indexOf(filter) == -1){
                li[i].classList.add('hide');
            }else{
                li[i].classList.remove('hide');
            }
        }
    })
})