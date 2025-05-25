const container = document.getElementById("emote-container");

// Simulation d'apparition d'émojis
const testEmotes = ["😂", "🔥", "💀", "❤️", "👌", "😎", "🥶", "😡", "😭", "👀"];

function spawnEmote(emote) {
  const span = document.createElement("span");
  span.className = "emote";
  span.textContent = emote;
  span.style.left = Math.random() * 90 + "%";
  container.appendChild(span);

  setTimeout(() => {
    container.removeChild(span);
  }, 3000);
}

// Simule l'apparition d'un émoji aléatoire toutes les secondes
setInterval(() => {
  const emote = testEmotes[Math.floor(Math.random() * testEmotes.length)];
  spawnEmote(emote);
}, 1000);
