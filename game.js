// class Game {
//     constructor() {
//         this.board = [];
//     }
//     initializeMap(rows, cols, probability) {
//         for (let i = 0; i < rows; i++) {
//             let currRow = [];
//             this.board.push(currRow)
//             for (let j = 0; j < cols; j++) {
//                 currRow.push(+(Math.random() < probability))
//             }
//         }
//     }

//     countLifeNeighbours(row, col) {
//         return ([
//             this.getCell(row - 1, col - 1),
//             this.getCell(row, col - 1),
//             this.getCell(row + 1, col - 1),
//             this.getCell(row - 1, col),
//             this.getCell(row + 1, col),
//             this.getCell(row - 1, col + 1),
//             this.getCell(row, col + 1),
//             this.getCell(row + 1, col + 1),
//         ]).filter(cell => cell === 1).length;
//     }

//     getCell(row, col) {
//         try {
//             return this.board[row][col]            
//         } catch (error) {
//             return undefined
//         }
//     }

//     getNextStateOfCell(row, col) {
//         const amountLife = this.countLifeNeighbours(row, col);
//         const cell = this.getCell(row, col);
//         if (cell && (amountLife < 2 || amountLife > 3)) {
//             this.board[row][col] = 0;
//         } else if (!cell && amountLife === 3) {
//             this.board[row][col] = 1;
//         }

//         return this.board[row][col];
//     }

//     nextIteration() {
//         for (let row = 0; row < this.board.length; row++) {
//             for (let col = 0; col < this.board[row].length; col++) {
//                 this.getNextStateOfCell(row, col)
//             }
//         }

//         return this.board;
//     }

//     start(interval) {
//         setInterval(this.nextIteration, interval);
//     }

//     render() {
//         const field = document.getElementById('field');  
        
//         for (let row = 0; row < this.board.length; row++) {
//             const divRow = document.createElement('div');
//             divRow.classList.add('row');
//             field.appendChild(divRow);
//             for (let col = 0; col < this.board[row].length; col++) {
//                 const cell = document.createElement('div');
//                 cell.classList.add('cell');
//                 cell.innerHTML(this.board[row][col]);
//                 divRow.appendChild(cell);
//             }
//         }
//     }
// }

// module.exports.Game = Game;
