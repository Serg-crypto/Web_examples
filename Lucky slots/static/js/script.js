img_stored = [
  "../static/images/heart-svg.svg",
  "../static/images/diamond-svg.svg",
  "../static/images/poker-flower-svg.svg",
];

const slot1 = document.getElementById("image-01");
const slot2 = document.getElementById("image-02");
const slot3 = document.getElementById("image-03");
const startButton = document.getElementById("mainButton");
const resultText = document.getElementById("textResult");
const buttonRestart = document.getElementById("secondButton");
const soundStart = document.getElementById("startAudio");
const soundCount = document.getElementById("audioCount");
const soundWinner = document.getElementById("audioVictory");
const soundLoser = document.getElementById("audioLoser");

startButton.addEventListener("click", function () {
  soundStart.play();
  let count = 0;
  startButton.style.display = "none";
  const intervalGame = setInterval(function () {
    mix_images();
    soundCount.play();
    count++;

    if (count == 4) {
      clearInterval(intervalGame);
      buttonRestart.style.display = "inline-block";
      if (slot1.src == slot2.src && slot3.src == slot2.src) {
        resultText.style.color = "#40a829";
        resultText.textContent = "🤑You've won!!🎉";
        soundWinner.play();
      } else {
        resultText.style.color = "Red";
        resultText.textContent = "❌GAME OVER❌";
        soundLoser.play();
      }
    }
  }, 2000);
});

function mix_images() {
  slot1.src = img_stored[Math.floor(Math.random() * img_stored.length)];
  slot2.src = img_stored[Math.floor(Math.random() * img_stored.length)];
  slot3.src = img_stored[Math.floor(Math.random() * img_stored.length)];
}

buttonRestart.addEventListener("click", function () {
  location.reload();
});
