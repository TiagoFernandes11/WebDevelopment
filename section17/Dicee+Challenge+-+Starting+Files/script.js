let randomNumber1 = parseInt(Math.random() * 6) + 1;
let randomNumber2 = parseInt(Math.random() * 6) + 1;

const img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

const img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

console.log(randomNumber1);
