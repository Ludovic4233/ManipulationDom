let screen = document.querySelector("#screen");
let btnRed = document.querySelector(".red");
btnRed.addEventListener("click", function(){
    screen.className = "red";
});

let btnGreen = document.querySelector(".green");
btnGreen.addEventListener("click", function(){
    screen.className = "green";
});

let btnBlue = document.querySelector(".blue");
btnBlue.addEventListener("click", function(){
    screen.className = "blue";
});

let btnToggle = document.querySelector(".toggle");
let toggle = false;
btnToggle.addEventListener("click", function(){
    if(toggle){
        screen.className = "black";
    }else{
        screen.className = "white";
    }
    toggle = !toggle;
});
let i = 0;
let array = ["red", "orange", "yellow", "green", "turquoise", "blue", "purple"];
let btnRainbow = document.querySelector(".rainbow");
btnRainbow.addEventListener('click', function(){
    console.log(i, array[i]);
    screen.className = array[i];
    i = (i + 1) % array.length;
    // if(i < array.length){
    //     screen.className = array[i];
    //     i = i+1;
    // }else{
    //     i = 0;
    // }
   
});

let btnHello = document.querySelector(".hello");
btnHello.addEventListener('click', function(){
    screen.innerHTML = "Hello World";
});

let input = document.querySelector("#text");
let btnCustom = document.querySelector("#custom");
btnCustom.addEventListener("click", function(){
    screen.innerHTML = input.value;
});