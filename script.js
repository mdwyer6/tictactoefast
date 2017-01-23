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
