console.log('loaded Circle Class')

class Circle {
  constructor (ctx, x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy= dy;
    this.radius = radius;
    this.ctx = ctx;
  }  

  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  }

  collision() {
    //calculate distance to hero
    //distance needs to be greater than R (circle) + r (hero);
    
    let d = Math.sqrt(Math.pow(this.x - hero.x, 2) + Math.pow(this.y - hero.y, 2));
    if (d <= this.radius + hero.radius) {
      gameover = true;
      // alert('Game is Over!');
    }
  }

  update(){
    // if (gameover) return;
    if (this.x + this.radius > this.ctx.canvas.clientWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.ctx.canvas.clientHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    this.collision();
    // if (gameover) {
    //   alert('Game is over');
    // }
  }
}

class Sprite extends Circle {
  constructor(ctx, x, y, dx, dy, radius) {
    super(ctx, x, y, dx, dy, radius);
    this.posture = 0;
  } 

  changePosture() {
    if (gameover) return clearInterval(this.changePosture);
    let self = this;
    if (self.posture !== 2) self.posture++;
    else self.posture = 0;
  }
  
  update(idx) {
    this.x -= this.dx;    
    if (this.x - this.radius < 0) {
      sprites.splice(idx, 1);
      return;
    }
    
    this.drawChar();
    // this.draw();
    this.collision();
    if (gameover) {
      // alert('Game is over');
    }
  }

  drawChar() {
    let size = 35; //for width/height
    this.ctx.drawImage(gameDetails[`alien${gameDetails.alienPosture}`], 0, 0, 208, 208, this.x - size / 2, this.y - size / 2, size, size);
  }

}

class Bullet extends Circle {
  constructor(ctx, x, y, dx, dy, radius) {
    super(ctx, x, y, dx, dy, radius);
  }

  update(idx) {

    if (gameover) return;

    this.x += this.dx;
    if (this.x + this.radius > this.ctx.canvas.clientWidth) {
      // this.x = this.ctx.canvas.clientWidth;
      //remove bullet from arr
      bullets.splice(idx, 1);
      return;
    }

    this.draw();
  }

}

class Hero extends Circle {
  constructor(ctx, x, y, dx, dy, radius){
    super(ctx, x, y, dx, dy, radius);
  }

  controls() {

    if(keys === undefined || keys.length === 0) {    
      this.dx = 0;
      this.dy = 0;
    } else {
      let key = keys.shift();
      //change increment value here
      let increment = this.radius * 2

      if (key === 38) this.dy = -increment; //up
      else if (key === 40) this.dy = increment; //down
      else if (key === 37) this.dx = -increment; //left
      else if (key === 39) this.dx = increment; //right
      
      else if (key === 32) { //space
        this.shoot();
        // console.log('pew pew');
      }

    }
  }
  
  shoot() {
    let bullet = new Bullet(this.ctx, this.x + this.radius, this.y, 10, 0, 5 );
    bullets.push(bullet);
  }

  update(){
    //use key press for hero
    this.controls();

    //alert if collision occurs
    let x = this.x + this.dx;
    let y = this.y + this.dy;


    this.x = (x - this.radius >= 0 && x + this.radius <= this.ctx.canvas.clientWidth) ? this.x + this.dx : this.x;
    this.y = (y - this.radius >= 0 && y + this.radius <= this.ctx.canvas.clientHeight) ? this.y + this.dy : this.y;

    this.draw();
  }
}

function animate(){
  
  if (gameover) {
    console.log('game is over');
    alert('Game Over')
    return;
  }
  
  requestAnimationFrame(animate);
  ctx1.clearRect(0, 0, ctx1.canvas.clientWidth, ctx1.canvas.clientHeight);

  //update multiple
  if (idleChar) idleChar.update();
  // if (hero) hero.update();

  if (sprites.length > 0) {
    sprites.forEach((sprite, idx) => {
      sprite.update(idx);
    })
  } else {
    circle1.update();
  }

  if (bullets.length > 0) {
    bullets.forEach((bullet, idx) => {
      bullet.update(idx);
    })
  }

  //check for collisions between bullets and sprites
  for (let i = 0; i < sprites.length; i++) {
    let s = sprites[i];
    
    for(let j = 0; j < bullets.length; j++) {
      let b = bullets[j];
      let d = Math.sqrt(Math.pow(s.x - b.x, 2) + Math.pow(s.y - b.y, 2));
      if (d <= s.radius + b.radius) {
        //bullet collided
        bullets.splice(j, 1);
        j--;

        //remove sprite
        sprites.splice(i, 1);
        i--;

        //update score
        gameScore += 100;
        gameScoreHTML.innerHTML= `Game Score: ${gameScore}`;
      }
    }
  }

}