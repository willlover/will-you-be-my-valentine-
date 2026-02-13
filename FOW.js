yesBtn.addEventListener("click", async () => {
  // play SFX immediately
  const yay = document.getElementById("sfxYay");
  const confetti = document.getElementById("sfxConfetti");

  try { yay.currentTime = 0; await yay.play(); } catch(e) {}
  setTimeout(() => { 
    try { confetti.currentTime = 0; confetti.play(); } catch(e) {}
  }, 120);

  // play main song
  const song = document.getElementById("song");
  try { song.currentTime = 0; await song.play(); } catch(e) {}
});
