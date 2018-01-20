class Shape {
  constructor(h, w) {
    this.x = 0;
    this.y = 0;
    this.h = h;
    this.w = w;
    this.centrex = w / 2;
    this.centrey = h / 2;
  }
}

class BingoSquare extends Shape {
  constructor(h, w, word) {
    super(h, w)
    this.word = word;
  }
  drawShape() {
    translate(this.x, this.y);
    rect(0, 0, this.h, this.w);
    textAlign(CENTER);
    text(this.word, this.centrex, this.centrey)
  }
  setXY(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Grid {
  constructor(array, cols, rows, h, w) {
    this.items = []
    this.h = h;
    this.w = w;
    this.cols = cols;
    this.rows = rows;
    var count = 0
    for (let i = 0; i < cols; i++) {
      this.items[i] = [];
      for (let j = 0; j < rows; j++) {
        this.items[i][j] = array[count];
        count++;
      }
    }
  }
  drawGrid() {
    let stepx = this.w / this.cols;
    let stepy = this.h / this.rows;
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.items[i][j].setXY(i * stepx, j * stepy)
        this.items[i][j].drawShape();
      }
    }
  }
}

function setup() {
  createCanvas(400, 400);
  a = new BingoSquare(50, 50, "hello!")
  ar = [a]
  mygrid = new Grid(ar, 1, 1, 300, 300)
}

function draw() {
  background(220);
  mygrid.drawGrid();
}
