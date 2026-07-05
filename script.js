let score = 0
$("#start").click(function() {
  score = 0;
  $("#score").text(score);
  $("#gameArea").empty();
});
function createBalloon() {
  let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  balloon.css({
    background: randomColor
  });

  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  $("#gameArea").append(balloon);
}


