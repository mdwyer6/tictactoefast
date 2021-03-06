var Game = function() {
  this.board = [
    [' . ', ' . ', ' . '],
    [' . ', ' . ', ' . '],
    [' . ', ' . ', ' . ']
  ];
  var types = ['X', 'O']
  this.currentTurn = types[Math.floor(Math.rand() * 2)];
  console.log('Lets start the game!');
  console.log('Player ' + this.currentTurn + ' goes first');
  this.draw();
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
  var winner = false;
  for (var i = 0; i < this.board.length; i++) {
    var count = [0, 0];
    for (var j = 0; j < this.board[i].length; j++) {
      if (this.board[i][j] === 'X') {
        count[0]++;
      } else if (this.board[i][j] === 'O') {
        count[1]++;
      }
    }
    if (count[0] === 3 || count[1] === 3) {
      winner = true;
    }
  }
  if (winner) {
    console.log("Player " + this.currentTurn +" has won the game");
  }
}
