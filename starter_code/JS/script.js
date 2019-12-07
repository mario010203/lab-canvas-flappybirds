window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var ctx = document.getElementById("canvas").getContext("2d");

    var board = new Background(ctx, 500, 500);
    //var flappy = new Player(ctx);

    ctx.clearRect(0, 0, 500, 500);
    board.draw();
    //flappy.draw();

  }

};
