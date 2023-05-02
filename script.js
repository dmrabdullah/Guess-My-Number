"use strict";

let numb = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").innerHTML = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").innerHTML = "?";
  numb = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").innerHTML = "⛔ No number!";
  } else if (guess === numb) {
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#3f9724";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = guess;
  } else if (guess !== numb) {
    if (score > 1) {
      displayMessage(guess > numb ? "📈 Too high!" : "📉 Too low");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      displayMessage("💀 You lost the game!");
      document.querySelector(".score").innerHTML = 0;
    }
  }
});
