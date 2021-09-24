window.addEventListener('load',function(){
    let img = this.document.querySelectorAll('img');
    let link = this.document.querySelectorAll('a');

    for(let i = 0; i < img.length; i++){
        img[i].addEventListener('contextmenu',function(e){
                e.preventDefault();
        })

        img[i].addEventListener('mousedown',function(e){
            e.preventDefault();
    })
    }

    for(let i = 0; i < link.length; i++){
        link[i].onclick = function(){
            if(confirm('otishni xohliszmi')){
                return true;
            }else{
                return false;
            }
        }
    }


    console.log(link);
})