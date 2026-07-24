/*const text="A Special Surprise For Rakshu ❤️";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

document.getElementById("startBtn").onclick=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="pages/birthday.html";

},800);

}*/
const text="Happy Birthday Rakshu ❤️";

let i=0;

function type(){

if(i<text.length){

document.getElementById("title").innerHTML+=text.charAt(i);

i++;

setTimeout(type,90);

}

}

type();

confetti({

particleCount:250,

spread:180

});

document.getElementById("nextBtn").onclick=()=>{

window.location.href="./balloons.html";

}
