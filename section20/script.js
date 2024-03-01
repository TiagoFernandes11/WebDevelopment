buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];

function nextSequence() {
  randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColor);
}

nextSequence();

gamePattern.forEach((color) => {
  $(`#${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio(`sounds/${color}.mp3`);
  audio.play();  
});

