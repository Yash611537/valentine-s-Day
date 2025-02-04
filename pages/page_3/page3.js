let leftPos = 0;
let bottomPos = 0;
const yesButton = document.getElementById("yessir");

yesButton.addEventListener("click", () => {
  window.location.href = "../page_4/page4.html";
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
