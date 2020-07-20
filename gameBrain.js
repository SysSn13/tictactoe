class Game {
    constructor() {
      this.O = "O";
      this.X = "X";
      this.inProgress = true;
      this.winner = null;
      this.currentTurn = this.O;
      this.totalMoves = 0;
      this.boxes = [];
      for (var i = 0; i < 9; i++) {
        var square = new Box();
        this.boxes.push(square);
      }
    }
  
    makeMove(i) {
      if (!this.boxes[i].value && this.inProgress) {
        this.boxes[i].value = this.currentTurn;
        this.totalMoves++;
        this.checkWinner();
        this.currentTurn = this.currentTurn === this.O ? this.X : this.O;
      }
    }
  
    checkWinner() {
      var win = false;
      for (let i = 0; i <= 6; i = i + 3) {
        if (
          this.boxes[i].value &&
          this.boxes[i].value === this.boxes[i + 1].value &&
          this.boxes[i].value === this.boxes[i + 2].value
        ) {
          win = true;
          this.boxes[i].isHightlighted = true;
          this.boxes[i + 1].isHightlighted = true;
          this.boxes[i + 2].isHightlighted = true;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          this.boxes[i].value &&
          this.boxes[i].value === this.boxes[i + 3].value  === this.boxes[i + 6].value
        ) {
          win = true;
          this.boxes[i].isHightlighted = true;
          this.boxes[i + 3].isHightlighted = true;
          this.boxes[i + 6].isHightlighted = true;
        }
      }
  
      var i = 0;
      if (
        this.boxes[i].value != null &&
        this.boxes[i].value === this.boxes[i + 4].value &&
        this.boxes[i].value === this.boxes[i + 8].value
      ) {
        win = true;
        this.boxes[i].isHightlighted = true;
        this.boxes[i + 4].isHightlighted = true;
        this.boxes[i + 8].isHightlighted = true;
      }
      i = 2;
      if (
        this.boxes[i].value &&
        this.boxes[i].value === this.boxes[i + 2].value &&
        this.boxes[i].value === this.boxes[i + 4].value
      ) {
        win = true;
        this.boxes[i].isHightlighted = true;
        this.boxes[i + 2].isHightlighted = true;
        this.boxes[i + 4].isHightlighted = true;
      }
      if (win) {
        this.winner = this.currentTurn;

        this.inProgress = false;
      }

      if (this.totalMoves === 9) {
        this.inProgress = false;
      }
    }
  }
  
  class Box {
    constructor() {
      this.value = null;
      this.isHightlighted = false;
    }
  }
  