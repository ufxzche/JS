window.addEventListener('load', function () {
    let num1 = this.document.querySelector('input[name=num1]');
    let num2 = this.document.querySelector('input[name=num2]');
    let select = this.document.querySelector('select');
    let btn = this.document.querySelector('.btn');
    let res = this.document.querySelector('.res');

    btn.addEventListener('click', function () {
        let inp1 = +num1.value;
        let inp2 = +num2.value;
        let answer = '';

        switch (select.value) {
            case 'sum':
                answer = inp1 + inp2;
                break;
            case 'sub':
                answer = inp1 - inp2;
                break;
            case 'mul':
                answer = inp1 * inp2;
                break;
            case 'div':
                answer = inp1 / inp2;
                break;
        }

        res.innerHTML = answer;
        btn.disabled = true;


    })



    //   num1.addEventListener('input',function(){
    //     btn.disabled = false;
    //    })

    //    num2.addEventListener('input',function(){
    //     btn.disabled = false;
    //    })

    //    select.addEventListener('input',function(){
    //     btn.disabled = false;
    //    })


    let refresh = [num1,num2,select];

    for(let i = 0; i < refresh.length; i++){
        refresh[i].addEventListener('input',function(){
            btn.disabled = false;
        })
    }

       
       

    // num1.addEventListener('change',function(){
    //     btn.disabled = false;
    // })

    // num1.addEventListener('keyup',function(){
    //     btn.disabled = false;
    // })


    
    
    
    
})