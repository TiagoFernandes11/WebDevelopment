buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
  randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColor);
}
