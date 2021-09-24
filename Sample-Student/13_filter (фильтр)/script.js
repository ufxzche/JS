window.addEventListener('load',function(){
    let input = this.document.querySelector('input');
    let link = this.document.querySelectorAll('.list-group-item');
    input.addEventListener('input',function(){
        let filter = input.value.toLowerCase();
        for(let i = 0; i < link.length; i++){
            let city = link[i].innerHTML;
            city = city.toLowerCase();
            if(city.indexOf(filter) == -1){
                link[i].classList.add('hide');
            }else{
                link[i].classList.remove('hide');
            }

            console.log(city);
        }



        console.log(filter);
    })


    // console.log(link);
    // console.log(input);

})

