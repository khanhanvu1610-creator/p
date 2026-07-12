let score = 0;

$("#start").click(function() {
  score = 0;
  $("#score").text(score);
  $("#gameArea").empty();

  for (let i = 0; i < 8; i++) {
    createBalloon();
  }
});

function createBalloon() {
  let colors = ["blue", "red", "green", "yellow", "orange", "pink"];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  balloon.css({
    background: randomColor,
    left: Math.random() * 830 + "px"
  });

  $("#gameArea").append(balloon);

  balloon.animate({
    bottom: "600px"
  }, 4000, function() {
    $(this).remove();
    createBalloon();
  });

  balloon.click(function() {
    $(this).stop();

    score++;

    $("#score").text(score);

    $(this).fadeOut(200, function() {
      $(this).remove();
      createBalloon();
    });
  });
}


