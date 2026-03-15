// ============================================
// ROAST LISTS
// ============================================

const normalRoasts = [
"Your confidence writes checks your logic can't cash",
"You argue like the facts are optional DLC",
"Your thinking process has loading screens",
"You explain things like you're discovering them mid-sentence",
"Your logic takes scenic routes",
"You debate like you skipped the tutorial",
"You bring chaos with zero strategy",
"You argue like confidence replaces evidence",
"Your ideas sound like unfinished drafts",
"You turn simple tasks into boss fights",
"You talk like you're buffering",
"You explain things but clarity never arrives",
"Your plans collapse before they start",
"You debate like you're improvising facts",
"Your reasoning feels experimental",
"Your arguments have plot twists but no plot",
"You don’t miss the point — you orbit it",
"You speak with confidence and no instructions",
"You argue like you're inventing the rules",
"Your logic runs on low battery"
];

const nuclearRoasts = [
"Your confidence is impressive considering the lack of evidence supporting it",
"You debate like someone who read half the instructions and ignored the rest",
"Your thinking process looks like a maze that forgot the exit",
"You argue with the energy of someone who thinks volume equals victory",
"You explain things in a way that generates more confusion than the original problem",
"You treat facts like background decoration",
"Your logic runs marathons avoiding conclusions",
"You debate like certainty showed up before reasoning",
"Your arguments sound bold but collapse under basic gravity",
"You approach clarity like it's a rumor",
"You explain things like the ending hasn't been written yet",
"Your reasoning feels like a beta version",
"You argue like you're hoping nobody asks follow-up questions",
"Your logic arrives late and leaves early",
"You debate like the goal is chaos not answers",
"Your explanations are plot twists without plots",
"You think out loud but skip the thinking part",
"You argue like confidence is a substitute for evidence",
"Your ideas show up unfinished",
"You treat structure like a suggestion"
];

// ============================================
// MEME BACKGROUNDS
// ============================================

const memes = [];
for (let i = 1; i <= 200; i++) {
  memes.push(`https://picsum.photos/seed/meme${i}/1200/800`);
}

// ============================================
// SOUND EFFECT
// ============================================

const roastSound = new Audio(
"https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

// ============================================
// MODE
// ============================================

let nuclearMode = false;

document.getElementById("modeBtn").addEventListener("click", () => {
  nuclearMode = !nuclearMode;

  const btn = document.getElementById("modeBtn");

  if (nuclearMode) {
    btn.innerText = "☢ NUCLEAR MODE ON";
    btn.style.background = "red";
  } else {
    btn.innerText = "☢ Nuclear Mode";
    btn.style.background = "#ff0050";
  }
});

// ============================================
// LEADERBOARD
// ============================================

let leaderboard = JSON.parse(localStorage.getItem("rizzBoard")) || [];
updateBoard();

// ============================================
// BUTTON
// ============================================

document.getElementById("roastBtn").addEventListener("click", roastRizz);

// ============================================
// MAIN FUNCTION
// ============================================

function roastRizz() {

  const rizz = document.getElementById("rizzInput").value.trim();
  const resultBox = document.getElementById("roastResult");

  if (!rizz) {
    resultBox.innerText = "Enter a rizz first";
    return;
  }

  const list = nuclearMode ? nuclearRoasts : normalRoasts;
  const roast = list[Math.floor(Math.random() * list.length)];

  showRainbowText(roast);
  playSound();
  randomBackground();

  leaderboard.push({ rizz, roast });
  if (leaderboard.length > 10) leaderboard.shift();

  localStorage.setItem("rizzBoard", JSON.stringify(leaderboard));
  updateBoard();
}

// ============================================
// RAINBOW TEXT
// ============================================

function showRainbowText(text) {

  const resultBox = document.getElementById("roastResult");

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];

  resultBox.innerHTML = text
    .split("")
    .map((char, i) =>
      `<span style="color:${colors[i % colors.length]}">${char}</span>`
    )
    .join("");

  resultBox.classList.remove("explode");
  void resultBox.offsetWidth;
  resultBox.classList.add("explode");
}

// ============================================
// RANDOM BACKGROUND
// ============================================

function randomBackground() {

  const meme = memes[Math.floor(Math.random() * memes.length)];

  document.body.style.backgroundImage = `url(${meme})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

// ============================================
// SOUND
// ============================================

function playSound() {
  roastSound.currentTime = 0;
  roastSound.play();
}

// ============================================
// LEADERBOARD UPDATE
// ============================================

function updateBoard() {

  const list = document.getElementById("leaderboard");
  list.innerHTML = "";

  leaderboard.slice(-10).reverse().forEach(item => {
    const li = document.createElement("li");
    li.innerText = `"${item.rizz}" → ${item.roast}`;
    list.appendChild(li);
  });

}
