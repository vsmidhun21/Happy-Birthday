document.getElementById("musicBtn").addEventListener("click", () => {
  const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  audio.play();
  alert("🎶 Enjoy the birthday song! 🎶");
});
