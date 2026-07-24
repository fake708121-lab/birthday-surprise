// Typing animation for title
const text = "Happy Birthday Rakshu ❤️";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  type();
  
  // Confetti animation
  if (typeof confetti !== 'undefined') {
    setTimeout(() => {
      confetti({
        particleCount: 300,
        spread: 200,
        origin: { y: 0.3 }
      });
    }, 500);
  }

  // Music Control
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  let isPlaying = false;

  // Music toggle click handler
  musicToggle.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.classList.remove("playing");
      musicToggle.textContent = "🎵";
      isPlaying = false;
    } else {
      bgMusic.play().then(() => {
        musicToggle.classList.add("playing");
        musicToggle.textContent = "🎶";
        isPlaying = true;
      }).catch(err => {
        console.log("Cannot autoplay:", err);
        musicToggle.textContent = "🔇";
      });
    }
  });

  // Next button navigation
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function() {
      confetti({
        particleCount: 200,
        spread: 150
      });
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.6s ease";
      setTimeout(() => {
        window.location.href = "./pages/balloons.html";
      }, 600);
    });
  }
});