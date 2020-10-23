class Player2 extends Player {
  constructor(health, { x, y, height, width }, imageSrc) {
    super(
      health,
      { x, y, height, width, changeInX: 10, changeInY: 10 },
      imageSrc,
      false
    );
    // console.assert(this.)
  }
  moveBy(changeInX, changeInY) {
    super.moveBy(changeInX, changeInY);
    if (changeInX === 0 && changeInY === 0) {
      this.imageSrc = "images/player2.png";
    } else {
      this.imageSrc = "images/player2_move.png";
    }
  }

  fire(to) {
    console.log("Fired at Player 2", to);
    const shot = new Shot({
      // Magic numbers are to make shot "appear" to come from weapons.
      from: {
        x: this.x + 80,
        y: this.y + 40,
      },
      to,
      height: 5,
      width: 5,
      owner: this,
    });
    this.shotsFired.push(shot);
  }
}
