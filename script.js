document.addEventListener("DOMContentLoaded", function(){

// NORMAL ROASTS
const normalRoasts=[
"That line had the confidence of a typo",
"Your rizz sounds like a loading screen tip",
"NPCs skip dialogue like that",
"Your flirting feels like unfinished homework",
"That line just tripped over itself",
"Your rizz needs a software update",
"Even autocorrect looked confused",
"That sounded smoother in your head",
"You flirt like the tutorial ended early",
"That line aged badly instantly"
];

// NUCLEAR ROASTS
const nuclearRoasts=[
"That rizz just caused secondhand embarrassment",
"Even the WiFi signal disconnected after hearing that",
"That line should come with a warning label",
"The universe facepalmed after that one",
"Even NPCs would report that line",
"That rizz belongs in a museum of bad ideas",
"Confidence level: maximum — logic level: zero",
"That line just scared the romance away",
"Even Google couldn't explain that one",
"That was so bad it looped back to comedy"
];

// MEME BACKGROUNDS
const memes=[];
for(let i=1;i<=100;i++){
memes.push(`https://picsum.photos/seed/${i}/1200/800`);
}

// SOUND
const roastSound=new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

// MODE
let nuclearMode=false;

const roastBtn=document.getElementById("roastBtn");
const modeBtn=document.getElementById("modeBtn");
const result=document.getElementById("roastResult");

// TOGGLE MODE
modeBtn.addEventListener("click",function(){

nuclearMode=!nuclearMode;

if(nuclearMode){
modeBtn.innerText="☢ NUCLEAR MODE ON";
modeBtn.style.background="red";
}else{
modeBtn.innerText="☢ Nuclear Mode";
modeBtn.style.background="#ff0050";
}

});

// ROAST BUTTON
roastBtn.addEventListener("click",function(){

const input=document.getElementById("rizzInput").value.trim();

if(!input){
result.innerText="Enter a rizz first";
return;
}

const list=nuclearMode?nuclearRoasts:normalRoasts;
const roast=list[Math.floor(Math.random()*list.length)];

showRainbow(roast);
playSound();
randomBackground();

updateLeaderboard(input,roast);

});

// RAINBOW TEXT
function showRainbow(text){

const colors=["red","orange","yellow","green","blue","purple"];

result.innerHTML=text.split("").map((c,i)=>
`<span style="color:${colors[i%colors.length]}">${c}</span>`
).join("");

result.classList.remove("explode");
void result.offsetWidth;
result.classList.add("explode");

}

// SOUND
function playSound(){
roastSound.currentTime=0;
roastSound.play();
}

// RANDOM BACKGROUND
function randomBackground(){

const meme=memes[Math.floor(Math.random()*memes.length)];

document.body.style.backgroundImage=`url(${meme})`;
document.body.style.backgroundSize="cover";

}

// LEADERBOARD
let leaderboard=JSON.parse(localStorage.getItem("rizzBoard"))||[];

function updateLeaderboard(rizz,roast){

leaderboard.push({rizz,roast});

if(leaderboard.length>10) leaderboard.shift();

localStorage.setItem("rizzBoard",JSON.stringify(leaderboard));

drawBoard();

}

function drawBoard(){

const list=document.getElementById("leaderboard");

list.innerHTML="";

leaderboard.slice().reverse().forEach(item=>{

const li=document.createElement("li");

li.innerText=`"${item.rizz}" → ${item.roast}`;

list.appendChild(li);

});

}

drawBoard();

});
