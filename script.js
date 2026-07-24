
const message="For Rakshu ❤️";

let i=0;

function type(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(type,120);

}

}

type();

function createHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},9000);

}

setInterval(createHeart,400);

document.getElementById("startBtn").onclick=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="pages/birthday.html";

},800);

};
