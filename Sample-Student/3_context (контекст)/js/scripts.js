window.addEventListener('load',function(){
    let div = document.querySelector('.text');
    div.addEventListener('click',function(){
        this.style.background = 'red';
        this.style.color = 'blue';
    })


   let car = {
       versiya: "BMV",
       speed: '100km/h',
       demo: function(){
           console.log(this);
       }
   }
   car.demo();


   console.log(this);

})

























// window.addEventListener('load',function(){
//     let div = document.querySelector('.text');
//     div.addEventListener('click',function(){
        
//         this.style.background = 'red';
//     })

//     var hz = {
//         some: function(){
//             console.log(this);
//         }
//     }
//     hz.some();
//     console.log(this);

// })
