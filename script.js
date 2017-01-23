var Game = function() {
  this.board = [
    [' . ', ' . ', ' . '],
    [' . ', ' . ', ' . '],
    [' . ', ' . ', ' . ']
  ];

  this.currentTurn = "X";
};

Game.prototype.draw() {
  console.log(this.board);
}

Game.prototype.announceTurn() {
  console.log(this.currentTurn);
  this.currentTurn === "X" ? this.currentTurn = "O" : this.currentTurn = "X";
}


Game.prototype.move(playerSign, location) {
  if (playerSign !== this.currentTurn) {
    console.log("Sorry, it isn't quite your turn yet");
  } else {
    this.board[location[0]][location[1]] = playerSign;

    this.draw();
    this.announceTurn();
  }
}