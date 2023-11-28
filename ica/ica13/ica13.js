// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//console.log("loaded properly");

class Ball {
  constructor(x, y, velX, velY, color, size) {
    //everytime we make a new ball, this will initialize with everything we need.
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // now we take the info from constructor and draw the circle.
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //the last to says to draw radius frin 0 to 2*Pi
    ctx.fill();
  }

  update() {
    //checking if the ball has hit the far right of the screen, if so, we will change the x velocity to be negative
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }
    // this checks the far left side.
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    // going to handle bottom
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }
    // handles top
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    //uses the balls array, look through all of them
    for (const ball of balls) {
      //check if we are looking at the ball we currently are on in the array.
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        //whenever they overalap, the color will change.
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];
while (balls.length < 10 ) {
  const size = random(1, 50);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-9, 9),
    random(-9, 9),
    randomRGB(),
    size
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  //calls the function again and it will make the balls bouncing smooth.
  requestAnimationFrame(loop);
}
// console.log(balls);

loop();
