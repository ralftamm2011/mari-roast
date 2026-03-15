const roasts = [
"Mari, your smile is sus 😏","Mari, your aura is chaotic 🤯","Mari, your DMs are wild 👀",
"Mari, your flirting makes NPCs blush 🤖","Mari, your energy is extra but your rizz… missing 💀",
"Mari, your TikTok moves are chaotic 😂","Mari, your texts confuse Einstein 🤓","Mari, even mirrors fear you 🪞",
"Mari, your sass could start a revolution ⚡","Mari, your typing speed is suspicious ⚡",
"Mari, your aura screams drama 🎭","Mari, your rizz is offline 24/7 💀","Mari, your smile could start a cult 😎",
"Mari, your DMs are a mystery 🕵️","Mari, your vibe is chaotic neutral 🔮","Mari, your flirting is like a puzzle 🧩",
"Mari, your energy could cause a traffic jam 🚗","Mari, even your cat judges you 🐱","Mari, your aura is rainbow 🌈",
"Mari, your texts hit harder than a hurricane 🌪️","Mari, your charm is sus 👀","Mari, your rizz is a glitch 🤖",
"Mari, even AI can’t predict you 🤯","Mari, your sass is legendary 😬","Mari, your aura is extra 🔥",
"Mari, your energy is wild 💥","Mari, your pickup lines are chaotic 🤡","Mari, your vibe is dramatic 🎬",
"Mari, your aura confuses Google Maps 🗺️","Mari, your texts are a horror story 👻","Mari, your rizz needs GPS 📡",
"Mari, your humor is extra 😂","Mari, even shadows side-eye you 👀","Mari, your smile could melt servers 💻",
"Mari, your aura is a rainbow tornado 🌈🌪️","Mari, your energy makes me sus 😏","Mari, your jokes hit like water balloons 💦",
"Mari, your rizz is invisible 💀","Mari, your DMs could haunt dreams 🌙","Mari, your aura is dramatic 🔮",
"Mari, your texts are chaotic 💬","Mari, your sass could fuel rockets 🚀","Mari, your flirting is like a riddle 🧩",
"Mari, your vibe is wild 😂","Mari, your aura is over 9000 💥","Mari, your energy could power cities ⚡",
"Mari, your rizz is legendary…ly bad 😬","Mari, even your Wi-Fi fears you 📶","Mari, your texts are sus 👀",
"Mari, your aura is sparkling but dangerous ✨💀","Mari, your personality hits harder than a meteor ☄️","Mari, your sass is unstoppable ⚡",
"Mari, your charm is offline 📴","Mari, your jokes are cursed 🔮","Mari, your rizz is in witness protection 🕵️",
"Mari, your aura is chaotic neutral with a hint of cursed 🤡","Mari, your DMs could be a horror movie 🎬","Mari, your energy could crash servers 💻",
"Mari, your vibe is too extra 🌈","Mari, your flirting is top-tier… for chaos 😏","Mari, your texts are haunted 👻",
"Mari, even your notifications run scared 🔔","Mari, your aura is rainbow but your rizz is grayscale 🌈","Mari, your smile could cause earthquakes 🌍",
"Mari, your energy is wild like a storm 🌪️","Mari, your jokes are cursed but funny 😂","Mari, your rizz is AFK 💀",
"Mari, your aura could cause traffic jams 🚗","Mari, your texts are like riddles 🧩","Mari, your sass could start fires 🔥",
"Mari, your charm is sus 👀","Mari, your flirting confuses AI 🤖","Mari, your energy could power a spaceship 🚀"
/* … continue until you hit 500 unique lines */
];

// 200 meme backgrounds
const memes = [];
for (let i=1;i<=200;i++){
  memes.push(`https://picsum.photos/seed/meme${i}/1200/800`);
}

// Leaderboard
let leaderboard = JSON.parse(localStorage.getItem("rizzBoard")) || [];
updateBoard();

// Button logic
document.getElementById("roastBtn").addEventListener("click", roastRizz);

function roastRizz(){
  const rizz = document.getElementById("rizzInput").value.trim();
  const resultBox = document.getElementById("roastResult");
  if(!rizz){ resultBox.innerText="Enter a rizz first! 💀"; return; }

  const roast = roasts.splice(Math.floor(Math.random()*roasts.length),1)[0];
  resultBox.innerHTML = roast.split('').map((char,i)=>{
    const colors=['red','orange','yellow','green','blue','indigo','violet'];
    return `<span style="color:${colors[i%colors.length]}">${char}</span>`;
  }).join('');

  const meme = memes[Math.floor(Math.random()*memes.length)];
  document.body.style.backgroundImage=`url(${meme})`;
  document.body.style.backgroundSize="cover";
  document.body.style.backgroundPosition="center";
  document.body.style.backgroundRepeat="no-repeat";

  leaderboard.push({rizz,roast});
  if(leaderboard.length>10) leaderboard.shift();
  localStorage.setItem("rizzBoard",JSON.stringify(leaderboard));
  updateBoard();
}

function updateBoard(){
  const list=document.getElementById("leaderboard");
  list.innerHTML="";
  leaderboard.slice(-10).reverse().forEach(item=>{
    const li=document.createElement("li");
    li.innerText=`"${item.rizz}" → ${item.roast}`;
    list.appendChild(li);
  });
}
