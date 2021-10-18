obj = [
    {
        id: 1, 
        name: 'Olma'
    },
    {
        id: 2, 
        name: 'Banan'
    },
    {
        id: 3, 
        name: 'Nok'
    },
    {
        id: 4, 
        name: 'Uzum'
    }
];

var ul = document.querySelector('ul');

obj.map((meva, index) => {
    var li = document.createElement('li');
    li.innerHTML = meva.name;
    ul.appendChild(li);    
});

var input = document.querySelector('input');
input.addEventListener('input', function(){
    console.log(input.value);
})