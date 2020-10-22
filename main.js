const gameOptions = {
  players: [
    // Player
    new Player(100, { x: 300, y: 100 }),

    // Computer
    // new Player(100, { x: 0, y: 0 }),
  ],
  world: new World(400, 500),
  obstacles: [
    // table
    new Obstacle(50, { x: 400, y: 500 }),
    // table2
    new Obstacle(50, { x: 600, y: 100 }),
  ],
};

const game = new Game(gameOptions);
game.start();

// https://stackoverflow.com/a/12444641
const handler = (e) => {
  if (
    !/^Key[WASD]$/.test(e.code) &&
    !/^Arrow(Up|Left|Right|Down)$/.test(e.code)
  ) {
    return;
  }
  keysPressed[e.code] = e.type === "keydown";
};

window.addEventListener("keydown", handler);
window.addEventListener("keyup", handler);

const clickHandler = (e) => {
  // ctx.fillStyle = "red";
  // ctx.fillRect(e.x, e.y, 50, 50);

  // produce the shot
  game.players[0].fire({ x: e.x, y: e.y });
};

canvas.addEventListener("click", clickHandler);
//Later: OnMouseDown provide automatic fire