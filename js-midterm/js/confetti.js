//used chatGPT to make
document.querySelector("#submit").addEventListener("click", celebrate);

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function celebrate() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = Math.random() * 1 + 0.5 + "s";
    confetti.style.backgroundColor = randomRGB()
    confettiContainer.appendChild(confetti);
  }

  document.body.appendChild(confettiContainer);

  // Remove confetti after animation duration
  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 1500);
}
