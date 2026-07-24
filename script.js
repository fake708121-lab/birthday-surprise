// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Generate QR Code
  const qrcodeDiv = document.getElementById('qrcode');
  new QRCode(qrcodeDiv, {
    text: window.location.href,
    width: 80,
    height: 80,
    colorDark: "#ff4f8b",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Music Control
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  let isPlaying = false;

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
      });
    }
  });

  // Simulate loading and transition
  setTimeout(() => {
    const loadingCard = document.getElementById('loadingCard');
    const contentCard = document.getElementById('contentCard');
    
    loadingCard.classList.add('hidden');
    contentCard.classList.remove('hidden');
    contentCard.classList.add('show');
  }, 3000);

  // No Button - Playful response
  document.getElementById('noBtn').addEventListener('click', function() {
    this.textContent = 'Seriously? 😭';
    this.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      this.textContent = 'No';
      this.style.transform = 'translateX(0)';
    }, 1000);
  });

  // Yes Button - Navigate
  document.getElementById('yesBtn').addEventListener('click', function() {
    confetti({
      particleCount: 300,
      spread: 200,
      origin: { y: 0.5 }
    });
    
    setTimeout(() => {
      window.location.href = './pages/birthday.html';
    }, 500);
  });
});