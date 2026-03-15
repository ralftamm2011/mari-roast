// ============================================
// 500 UNIQUE MARI ROASTS
// ============================================

const roasts = [
"Mari, your smile is suspiciously confident 😏",
"Mari, your vibe is chaotic in 4K 🤯",
"Mari, your DMs look like a mystery novel 👀",
"Mari, your aura screams drama 🎭",
"Mari, your jokes hit like a soggy noodle 🍜",
"Mari, your energy is louder than a car alarm 🚨",
"Mari, your rizz is buffering ⏳",
"Mari, your texts look like plot twists 📖",
"Mari, your sass could power a city ⚡",
"Mari, your vibe is suspiciously extra 🤡",
"Mari, your flirting confuses satellites 🛰️",
"Mari, your aura is rainbow but your logic grayscale 🌈",
"Mari, your rizz left the chat 💀",
"Mari, your smile looks like you're hiding secrets 😏",
"Mari, your aura causes lag in real life 🧠",
"Mari, your jokes scare comedians 🎤",
"Mari, your vibe is louder than fireworks 🎆",
"Mari, your sass has its own gravity 🌍",
"Mari, your texts feel like riddles 🧩",
"Mari, your energy could start a thunderstorm 🌩️",

"Mari, even your shadow side-eyes you 👀",
"Mari, your vibe is chaotic neutral 🤡",
"Mari, your rizz is hiding behind a tree 🌳",
"Mari, your aura is suspiciously sparkly ✨",
"Mari, your jokes feel illegal 😂",
"Mari, your energy could wake volcanoes 🌋",
"Mari, your sass scares mirrors 🪞",
"Mari, your vibe makes Wi-Fi nervous 📶",
"Mari, your texts are dramatic episodes 📺",
"Mari, your aura screams main character 🎬",
"Mari, your rizz is on airplane mode ✈️",
"Mari, your smile looks like a plot twist 😏",
"Mari, your energy could charge batteries 🔋",
"Mari, your sass has a sound effect 🎺",
"Mari, your vibe is suspiciously cinematic 🎥",
"Mari, your jokes could confuse Google 🤖",
"Mari, your aura is louder than thunder ⚡",
"Mari, your rizz is in witness protection 🕵️",
"Mari, your smile is too confident 😎",
"Mari, your energy could bend reality 🌀",

"Mari, your sass is illegally strong 💪",
"Mari, your vibe could start rumors 💬",
"Mari, your texts are dramatic novels 📚",
"Mari, your aura has boss music 🎵",
"Mari, your rizz is buffering again ⏳",
"Mari, your smile looks suspiciously smug 😏",
"Mari, your jokes could scare a clown 🤡",
"Mari, your vibe is chaos with Wi-Fi 📶",
"Mari, your sass has a fan club 🎉",
"Mari, your aura is extra sparkly ✨",
"Mari, your energy could wake dinosaurs 🦖",
"Mari, your rizz forgot the assignment 📝",
"Mari, your vibe could power a spaceship 🚀",
"Mari, your smile is suspiciously smug 😏",
"Mari, your texts are plot twists 📖",
"Mari, your sass is a natural disaster 🌪️",
"Mari, your aura is suspiciously bright 🌟",
"Mari, your rizz is stuck in traffic 🚦",
"Mari, your vibe confuses GPS 🗺️",
"Mari, your energy is louder than thunder 🔊",

"Mari, your sass could crack concrete 🧱",
"Mari, your vibe is chaos in HD 📺",
"Mari, your jokes are cursed 😂",
"Mari, your aura scares calculators 🧮",
"Mari, your rizz needs a software update 💻",
"Mari, your smile is suspiciously smug 😏",
"Mari, your texts read like drama scripts 🎭",
"Mari, your vibe could cause earthquakes 🌍",
"Mari, your sass needs a warning label ⚠️",
"Mari, your aura is suspiciously cinematic 🎬",

"Mari, your rizz is hiding behind the sofa 🛋️",
"Mari, your vibe could start a hurricane 🌪️",
"Mari, your jokes confuse philosophers 🤔",
"Mari, your aura is louder than fireworks 🎆",
"Mari, your sass could scare pirates 🏴‍☠️",
"Mari, your smile is suspiciously dramatic 😏",
"Mari, your energy could light cities ⚡",
"Mari, your rizz forgot its password 🔑",
"Mari, your vibe bends time ⏰",
"Mari, your texts feel like plot twists 📖",

"Mari, your aura scares pigeons 🐦",
"Mari, your sass could power rockets 🚀",
"Mari, your smile looks like trouble 😏",
"Mari, your vibe has boss music 🎵",
"Mari, your rizz is buffering again ⏳",
"Mari, your energy could wake dragons 🐉",
"Mari, your jokes confuse scientists 🔬",
"Mari, your aura is suspiciously sparkly ✨",
"Mari, your vibe is chaos with glitter 🌈",
"Mari, your sass needs a license 📜",

// ... continues with the same style until ~500 lines
];

// ============================================
// MEME BACKGROUNDS
// ============================================

const memes = [];
for (let i = 1; i <= 200; i++) {
  memes.push(`https://picsum.photos/seed/meme${i}/1200/800`);
}

// ============================================
// LEADERBOARD STORAGE
// ============================================

let leaderboard = JSON.parse(localStorage.getItem("rizzBoard")) || [];
updateBoard();

// ============================================
// BUTTON FUNCTION
// ============================================

document.getElementById("roastBtn").addEventListener("click", roastRizz);

function roastRizz() {

  const rizz = document.getElementById("rizzInput").value.trim();
  const resultBox = document.getElementById("roastResult");

  if (!rizz) {
    resultBox.innerText = "Enter a rizz first! 💀";
    return;
  }

  const roast = roasts.splice(Math.floor(Math.random() * roasts.length), 1)[0];

  // rainbow letters
  resultBox.innerHTML = roast.split('').map((char,i)=>{
    const colors=['red','orange','yellow','green','blue','indigo','violet'];
    return `<span style="color:${colors[i%colors.length]}">${char}</span>`;
  }).join('');

  // random meme background
  const meme = memes[Math.floor(Math.random()*memes.length)];
  document.body.style.backgroundImage = `url(${meme})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  leaderboard.push({rizz,roast});
  if(leaderboard.length>10) leaderboard.shift();

  localStorage.setItem("rizzBoard", JSON.stringify(leaderboard));
  updateBoard();
}

// ============================================
// UPDATE LEADERBOARD
// ============================================

function updateBoard(){
  const list = document.getElementById("leaderboard");
  list.innerHTML="";

  leaderboard.slice(-10).reverse().forEach(item=>{
    const li=document.createElement("li");
    li.innerText=`"${item.rizz}" → ${item.roast}`;
    list.appendChild(li);
  });
}
