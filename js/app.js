// Enemies our player must avoid
let navMenu = document.querySelectorAll('.nav');
class Enemy {
  constructor(y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = y;
    this.speed = 45;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  setMoveSpeed() {
    this.speed = Math.floor((Math.random() * 150) + 10);
  }
  checkCollision() {
    if (
      this.y > player.y - 50 &&
      this.y < player.y + 50 &&
      this.x > player.x - 50 &&
      this.x < player.x + 50) {
      player.y = 400;
    };
  };
  update(dt) {
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
  }
  render() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  update() {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  };
  handleInput(key) {
      if(key=='left'&&this.x>20)this.x -= 25;
      if(key=='right'&&this.x<400)this.x += 25;
      if(key=='up'&&this.y>-10)this.y -= 25;
      if(key=='down'&&this.y<400)this.y += 25;

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
