//Colors array
let colors = ['red'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})

let colors1 = ['green'];

//get button
let button2 = document.getElementById('button2');

//add event listener
button2.addEventListener('click', function(){
    //randomizer
    var randomColor = colors1[Math.floor(Math.random() * colors1.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})