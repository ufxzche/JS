window.addEventListener('load',function(){
    let div = this.document.querySelector('.monster1');

    let monster = {
        health: 100,
        power: 5,
        damage: function(x){
            return this.health = this.health - x;
        },
        attack: function(){
            return Math.floor(this.power + Math.random() * this.power); // 5- 9
        }
    }


    // let monster = {
    //     health: 100,
    //     power: 5,
    //     damage: function(x){
    //         return this.health = this.health - x;
    //     },
    //     attack: function(){
    //         return Math.floor(this.power + Math.random() * this.power); // 5- 9
    //     }
    // }

    // let monster = {
    //     health: 100,
    //     power: 5,
    //     damage: function(x){
    //         return this.health = this.health - x;
    //     },
    //     attack: function(){
    //         return Math.floor(this.power + Math.random() * this.power); // 5- 9
    //     }
    // }

    div.addEventListener('click',function(){
        monster1.damage(monster3.attack());
        monster2.damage(monster1.attack());
        monster3.damage(monster2.attack());
        this.innerHTML = monster1.health + ' ' + monster2.health + ' ' + monster3.health;
    })

    function Monster(health,power){
        this.health = health,
        this.power = power,
        this.damage = function(x){
            return this.health = this.health - x;
        },
        this.attack = function(){
            return Math.floor(this.power + Math.random() * this.power); // 5- 9
        }
    }
    
    let monster1 = new Monster(100,5);
    let monster2 = new Monster(120,4);
    let monster3 = new Monster(80,7);   
    // console.log(monster1);
    // console.log(monster2);
    // console.log(monster3);

     




    // console.log(div);
})