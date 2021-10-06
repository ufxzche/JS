window.addEventListener('load', function(){
    let div = this.document.querySelector('.monster1');

    // let monster = {
    //     health: 100,
    //     power: 5,
    //     damage: function(x){
    //         return this.health = this.health - x
    //     },
    //     attack: function(){
    //         return Math.floor(this.power + Math.random() * this.power);
    //     }
    // }

    div.addEventListener('click', function(){
        monster1.damage(monster2.attack());
        monster2.damage(monster3.attack());
        monster3.damage(monster1.attack());
        this.innerHTML = monster1.health + ' ' + monster2.health + ' ' + monster3.health;
    })

    function monster(health, power) {
        this.health = health,
        this.power = power,
        this.damage = function(x){
            return this.health = this.health - x
        },
        this.attack = function(){
            return Math.floor(this.power + Math.random() * this.power);
        }
    }

    let monster1 = new monster(100, 5);
    let monster2 = new monster(110, 7);
    let monster3 = new monster(120, 8);
})

