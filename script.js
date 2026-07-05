let score = 0
$("#start").click(function() {
  score = 0;
  $("#score").text(score);
  $("#gameArea").empty();
});

  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  $("#gameArea").append(balloon);
}


