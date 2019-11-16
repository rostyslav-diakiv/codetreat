const Game = require('./game.js').Game;

test('adds 1 + 2 to equal 3', () => {
  const rows = 50;
  const cols = 50;
  const aliveProbability = 0.2;
  const game = new Game();
  game.initializeMap(rows, cols, aliveProbability);
  expect(game.board.length).toBe(rows);
});


test('adds 1 + 2 to equal 3', () => {
    const game = new Game();
    game.board = [
        [0, 1, 1],
        [1, 0, 0], 
        [1, 0, 0]
    ];

    expect(game.countLifeNeighbours(0, 0)).toBe(2);
  });

  test('adds 1 + 2 to equal 3', () => {
    const game = new Game();
    game.board = [
        [0, 1, 1],
        [1, 0, 0], 
        [1, 0, 0]
    ];

    expect(game.getNextStateOfCell(0, 2)).toBe(0);
  });

  test('adds 1 + 2 to equal 3', () => {
    const game = new Game();
    game.board = [
        [0, 1, 1],
        [1, 0, 0], 
        [1, 0, 0]
    ];

    const expected = [
        [0, 1, 0], 
        [1, 1, 0], 
        [1, 1, 0]
    ];

    expect(game.nextIteration()).toEqual(expected);
  });

  test('adds 1 + 2 to equal 3', () => {
    const game = new Game();
    game.board = [
        [0, 1, 1],
        [1, 0, 0], 
        [1, 0, 0]
    ];

    const expected = [
        [0, 1, 0], 
        [1, 1, 0], 
        [0, 0, 0]
    ];

    game.start(1000);

    setTimeout(() => {
        expect(game.board).toBe(expected);
    }, 1100);

  });

  test('adds 1 + 2 to equal 3', () => {
    const game = new Game();
    game.initializeMap(5, 5);

    game.render();

    const elements = document.getElementsByClassName('cell');

    expect(elements.length).toBe(25);
  });
