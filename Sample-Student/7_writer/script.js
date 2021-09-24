window.addEventListener('load',function(){
    let elem = this.document.querySelector('.text');
    let str = elem.innerHTML;
    elem.innerHTML = '';
    let i = 0;
    function print(){
            elem.innerHTML = elem.innerHTML + str.charAt(i);
            i++;
    }

    // print()-
    setInterval(print,50);
    console.log(str);
})