// Typing animation for title
const text = "Happy Birthday Rakshu ❤️";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 90);
  }
}

type();

// Confetti animation
confetti({
  particleCount: 250,
  spread: 180
});

// Music Control
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.classList.remove("playing");
    musicToggle.textContent = "🎵";
  } else {
    bgMusic.play().catch(err => console.log("Autoplay prevented:", err));
    musicToggle.classList.add("playing");
    musicToggle.textContent = "🎶";
  }
  isPlaying = !isPlaying;
});

// Try to auto-play music
bgMusic.play().catch(() => {
  console.log("Autoplay not allowed until user interaction");
});

// Next button navigation
document.getElementById("nextBtn").onclick = () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "./pages/balloons.html";
  }, 500);
};
