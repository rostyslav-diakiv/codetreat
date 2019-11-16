const fieldSize = 10;
const rows = 15;
const cols = 15;
const backgroupColor = 'grey';
const aliveCellColor = 'red';

const canvas = document.getElementById('canvas');
canvas.width = cols * fieldSize;
canvas.height = rows * fieldSize;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'gray';
ctx.fillRect(0, 0, rows * fieldSize, cols * fieldSize);

const gameBoard = new Game(rows, cols);

for (let y = 0; y < gameBoard.map.length; y++) {
  for (let x = 0; x < gameBoard.map[y].length; x++) {
    if (gameBoard.map[y][x] === true) {
      ctx.fillStyle = 'red';
      ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
    } else {
      ctx.fillStyle = 'grey';
      ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
    }
  }
}

function checkAlive(map) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      let neibourCounter = 0;
      if (map[y - 1] !== undefined && map[y - 1][x]) neibourCounter++; // 12
      if (map[y - 1] !== undefined && map[y - 1][x + 1]) neibourCounter++;
      if (map[y] !== undefined && map[y][x + 1]) neibourCounter++;
      if (map[y + 1] !== undefined && map[y + 1][x + 1]) neibourCounter++;
      if (map[y + 1] !== undefined && map[y + 1][x]) neibourCounter++;
      if (map[y + 1] !== undefined && map[y + 1][x - 1]) neibourCounter++;
      if (map[y] !== undefined && map[y][x - 1]) neibourCounter++;
      if (map[y - 1] !== undefined && map[y - 1][x - 1]) neibourCounter++;

      if (map[y][x] && (neibourCounter < 2 || neibourCounter > 3)) {
        map[y][x] = false;
      }

      if (!map[y][x] && neibourCounter === 3) {
        map[y][x] = true;
      }
    }
  }

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === true) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
      } else {
        ctx.fillStyle = 'grey';
        ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
      }
    }
  }
}

setInterval(() => checkAlive(gameBoard.map), 100);

