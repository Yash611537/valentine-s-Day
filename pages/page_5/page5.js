let leftPos = 0;
let bottomPos = 0;
const yesButton = document.getElementById("yessir");

yesButton.addEventListener("click", () => {
  // Create and show the dialog
  const dialog = document.createElement("div");
  dialog.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px 40px;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(255,105,180,0.3);
    z-index: 1000;
    font-size: 1.5em;
    text-align: center;
    color: #ff69b4;
    border: 2px solid #ff69b4;
    animation: fadeIn 0.5s ease-out;
  `;
  dialog.textContent =
    "Yayieee! Get in touch with me to discuss our date! ❤️ Can't wait for our special day! I love you Jassu so so so much!!😘💋";
  document.body.appendChild(dialog);

  // Create a more elaborate confetti celebration
  const duration = 2000;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = duration - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Since they're random, these will create confetti from random positions
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);

  // Add some hearts confetti in the middle
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ["heart"],
    colors: ["#ff69b4", "#ff1493", "#ff69b4"],
  });
});

document.getElementById("nooo").addEventListener("mouseover", () => {
  leftPos = Math.floor(Math.random() * (50 - -50 + 1)) + -50;
  bottomPos = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
  document.getElementById("nooo").style.position = "absolute";
  document.getElementById("nooo").style.left = leftPos + "%";
  document.getElementById("nooo").style.bottom = bottomPos + "%";
});
document.getElementById("nooo").addEventListener("click", () => {
  leftPos = Math.floor(Math.random() * (50 - -50 + 1)) + -50;
  bottomPos = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
  document.getElementById("nooo").style.position = "absolute";
  document.getElementById("nooo").style.left = leftPos + "%";
  document.getElementById("nooo").style.bottom = bottomPos + "%";
});
