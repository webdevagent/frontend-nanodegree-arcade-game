// Enemies our player must avoid
let navMenu = document.querySelectorAll('.nav');
let canMove = true;
let points = 0;
let stats;

function getPoints() {
  return points;
}

class Enemy {
  constructor(y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = y;
    this.speed = Math.floor((Math.random() * 150) + 20);
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  setMoveSpeed() {
    this.speed = Math.floor((Math.random() * 150) + 10+points*20);
  }
  checkCollision() {
    if (
      this.y > player.y - 55 &&
      this.y < player.y + 55 &&
      this.x > player.x - 50 &&
      this.x < player.x + 50) {
      player.y = 400;
      player.lifes -= 1;
    };
  };
  update(dt) {
    if (canMove) {
      this.checkCollision();
      if (this.x > 500) {
        this.x = -100;
        this.setMoveSpeed();
      } else {

        this.x += this.speed * dt;
      }
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
    };
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
  };
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
};

/*const Bug = new Enemy(-100,50);
const Bug1=new Enemy(-100,130);
const Bug2=new Enemy(-100,220);*/
const allEnemies = [new Enemy(50), new Enemy(130), new Enemy(220)]

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

class Hero {
  constructor(y) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = y;
    this.lifes = 3;
  }
  render() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  update() {
    if (this.lifes == 0) {
      stats = 'GAME OVER';
      canMove = false
    }
    if (points == 10) {
      stats = 'YOU WIN';
      canMove = false
    };

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  };
  handleInput(key) {
    if (canMove) {
      if (key == 'left' && this.x > 20) this.x -= 25;
      if (key == 'right' && this.x < 400) this.x += 25;
      if (key == 'up' && this.y > -10) this.y -= 25;
      if (key == 'down' && this.y < 400) this.y += 25;

    };

  };
};

// Variables applied to each of our instances go here,
// we've provided one for you to get started

// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images


const player = new Hero(300);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

function getLifes() {
  return player.lifes;
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
navMenu.forEach(num => num.addEventListener('click', (ev) => {
  player.handleInput(ev.target.classList[0]);
  console.log(ev.target.classList[0]);
}));
class Star {
  constructor(y) {
    this.sprite = 'images/Star.png';
    this.x = 200;
    this.y = -10;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  checkCollision() {
    if (
      this.y > player.y - 25 &&
      this.y < player.y + 25 &&
      this.x > player.x - 15 &&
      this.x < player.x + 15) {
      player.y = 400;
      points += 1;
      this.x = Math.floor((Math.random() * 400) + 10);

    };
  };
  update(dt) {
    this.checkCollision();
  };
  // Variables applied to each of our instances go here,// we've provided one for you to get started
};
const pointStar = new Star();

function getStats() {
  return stats;
}
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
