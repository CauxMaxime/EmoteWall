const container = document.getElementById("emote-container");

const exampleEmotes = ["😂", "🔥", "💀", "❤️", "👌", "😎", "🥶", "😡", "😭", "👀"];

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

// Simuler des emotes toutes les 1s (à remplacer par intégration Twitch réelle)
setInterval(() => {
  const emote = exampleEmotes[Math.floor(Math.random() * exampleEmotes.length)];
  spawnEmote(emote);
}, 1000);
