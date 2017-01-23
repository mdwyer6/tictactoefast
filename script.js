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
