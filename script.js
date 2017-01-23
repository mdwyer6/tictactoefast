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
  } else if (this.board[location[0]][location[1]] !== ' . ') {
    console.log('That space has already been taken');
  } else {
    this.board[location[0]][location[1]] = playerSign;
    if (this.checkForWin()) {
      return;
    }
    this.draw();
    this.announceTurn();
  }
}

Game.prototype.endGame() {
  this.move = function() {
    console.log("The game has ended");
  }
}

Game.prototype.checkForWin() {
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[i].length; j++) {
      this.board
    }
  }

  console.log()
}
