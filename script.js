// ============================================
// SUS & FUNNY MARI ROASTS (500+)
// ============================================

// Base “sus/funny” templates
const subjects = [
  "Mari", "Your vibes", "Your flirting", "Your energy", "Your aura",
  "Your typing speed", "Your smile", "Your rizz", "Your TikTok dance", "Your DMs"
];

const actions = [
  "is more suspicious than", "is weirder than", "is sketchier than", 
  "is louder than", "is faster than", "is slower than", 
  "makes me question reality more than", "is creepier than", "is extra than", "is sassier than"
];

const objects = [
  "a hacker in Roblox 🤖", "a mystery NPC 👀", "a cat judging you 🐱", 
  "a Zoom call at 3 AM 💤", "a glitch in your crush’s DMs 💌", 
  "my Wi-Fi on Monday mornings ☕💀", "a suspicious TikTok trend 🔥", 
  "a clown at prom 🤡", "your browser history 😳", "a UFO sighting 🛸"
];

// Generate 500 unique sus/funny roasts
const roasts = [];
while (roasts.length < 500) {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const roast = `${subject} ${action} ${object}!`;
  if (!roasts.includes(roast)) roasts.push(roast);
}

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
// BUTTON CLICK FUNCTION
// ============================================
document.getElementById("roastBtn").addEventListener("click", roastRizz);

function roastRizz() {
  const rizz = document.getElementById("rizzInput").value.trim();
  const resultBox = document.getElementById("roastResult");

  if (!rizz) {
    resultBox.innerText = "Enter a rizz first! 💀";
    return;
  }

  // 🧨 RANDOM SUS/FUNNY MARI ROAST
  const roast = roasts.splice(Math.floor(Math.random() * roasts.length), 1)[0];

  // 🌈 Rainbow letters
  resultBox.innerHTML = roast.split('').map((char, i) => {
    const colors = ['red','orange','yellow','green','blue','indigo','violet'];
    return `<span style="color:${colors[i % colors.length]}">${char}</span>`;
  }).join('');

  // 🎨 RANDOM MEME BACKGROUND
  const meme = memes[Math.floor(Math.random() * memes.length)];
  document.body.style.backgroundImage = `url(${meme})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  // 🧾 UPDATE LEADERBOARD
  leaderboard.push({ rizz, roast });
  if (leaderboard.length > 10) leaderboard.shift();
  localStorage.setItem("rizzBoard", JSON.stringify(leaderboard));
  updateBoard();
}

function updateBoard() {
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  leaderboard.slice(-10).reverse().forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `"${item.rizz}" → ${item.roast}`;
    list.appendChild(li);
  });
}