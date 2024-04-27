const keypress = require("keypress");
const Screen = require("./screen");

//Listen for keypress Events:
keypress(process.stdin);

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        if (key.name === "up") this.up();
        else if (key.name === "down") this.down();
        else if (key.name === "left") this.left();
        else if (key.name === "right") this.right();
      }
    });

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // Move cursor up
    if (this.row > 0) {
      this.resetBackgroundColor();
      this.row--;
      this.setBackgroundColor();
    }
  }

  down() {
    // Move cursor down
    if (this.row < this.numRows - 1) {
      this.resetBackgroundColor();
      this.row++;
      this.setBackgroundColor();
    }
  }

  left() {
    // Move cursor left
    if (this.col > 0) {
      this.resetBackgroundColor();
      this.col--;
      this.setBackgroundColor();
    }
  }

  right() {
    // Move cursor right
    if (this.col < this.numCols - 1) {
      this.resetBackgroundColor();
      this.col++;
      this.setBackgroundColor();
    }
  }

}


module.exports = Cursor;
