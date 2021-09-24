// window.addEventListener('load', function() {
//     var div1 = document.querySelector('.item-1 span');
//     var div2 = document.querySelector('.item-2 span');

//     function Timer(elem, time, int) {
//         this.elem = elem; // div
//         this.time = time; // vaqt
//         this.int = int; // interval

//         this.elem.innerHTML = this.time;

//         this.tick = function() {
//             this.time--;
//             this.elem.innerHTML = this.time;

//         }
//         var agent = this;
//         this.start = function() {
//             setInterval(function() {
//                 agent.tick();
//                 // console.log(this);

//             }, agent.int);

//         }
//     }

//     var timer1 = new Timer(div1, 800, 1000);
//     var timer2 = new Timer(div2, 1000, 500);

//     timer1.start();
//     timer2.start();


//     console.log(timer1);
//     console.log(timer2);
// })\


window.addEventListener('load', function() {
    function Timer(span, btnStart, btnRestart, time, inter) {
        this.span = document.querySelector('span');
        this.btnStart = document.querySelector('.btn-start');
        this.btnRestart = document.querySelector('.btn-restart');
        this.time = time;
        this.inter = inter;
        this.span.innerHTML = time;
        var agent = this;
        this.start = function() {
            agent.btnStart.innerHTML = 'Stop';
            agent.interval = setInterval(function() {
                agent.time--
                    agent.span.innerHTML = agent.time;
                if (agent.time <= 0) {
                    clearInterval(agent.interval);
                    agent.btnStart.disabled = true;
                }
            }, agent.inter)
        }
        this.stop = function() {
            clearInterval(agent.interval)
            agent.btnStart.innerHTML = 'Start'
        }

        this.restart = function() {
            clearInterval(agent.interval);
            agent.time = time;
            agent.span.innerHTML = time;
            agent.btnStart.disabled = false;
            agent.btnStart.innerHTML == 'Start'
        }
        this.btnStart.onclick = function() {
            if (agent.btnStart.innerHTML == 'Start') {
                agent.start();
            } else {
                agent.restart()
            }
        }

        this.btnRestart.onclick = function() {
            agent.restart();
        }
    }


    var timer1 = new Timer('.item-1 span', '.item-1 .btn-start', '.item-1 .btn-restart', 200, 30);
    var timer2 = new Timer('.item-2 span', '.item-2 .btn-start', '.item-2 .btn-restart', 300, 40);
    console.log(timer1)
    console.log(timer2)
})