window.addEventListener('load',function(){
   

    let sl1 = new slider('.gallery-1 .next','.gallery-1 .prev','.gallery-1 .photo img');
    let sl2 = new slider('.gallery-2 .next','.gallery-2 .prev','.gallery-2 .photo img');
    let sl3 = new slider('.gallery-3 .next','.gallery-3 .prev','.gallery-3 .photo img');
    console.log(sl1);

    function slider(btnNext,btnPrev,images){

        this.next = document.querySelector(btnNext);
        this.prev  = document.querySelector(btnPrev);
        this.img = document.querySelectorAll(images);
        this.i = 0;
    
        let slider = this;

        this.next.onclick = function(){
            slider.img[slider.i].classList.remove('active');
            slider.i++;
            if(slider.i >= slider.img.length){
                slider.i = 0;
            }
            slider.img[slider.i].classList.add('active');
        }
    
        this.prev.onclick = function(){
            slider.img[slider.i].classList.remove('active');
            slider.i--;
            if(slider.i < 0){
                slider.i = slider.img.length - 1;
            }
            slider.img[slider.i].classList.add('active');
        }
    
    }
    



    

})