document.getElementById('playButton').addEventListener('click', () => {
  const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
  audio.play();
  alert('🎶 Music is playing! Enjoy the birthday vibes! 🎶');
});
