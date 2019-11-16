class Game {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.map = Array(rows)
      .fill(0)
      .map(el => Array(cols).fill(false));
    this.initialiseMap();
  }

  initialiseMap() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
          this.map[i][j] = Math.random() < 0.15 ? true : false;
      }
    }
  };
}
