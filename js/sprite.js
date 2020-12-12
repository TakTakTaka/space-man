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
    
    // console.log(Math.sqrt(Math.pow(this.x - hero.x,2) - Math.p))
    let d = Math.sqrt(Math.pow(this.x - hero.x, 2) + Math.pow(this.y - hero.y, 2));
    if (d <= this.radius + hero.radius) {
      gameover = true;
      alert('Game is Over!');
    }
  }

  update(){
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
  }

}

class Hero extends Circle {
  constructor(ctx, x, y, dx, dy, radius){
    super(ctx, x, y, dx, dy, radius);
  }

  controls(){
    /* 
    38 = up
    40 = down
    37 = left
    39 = right
    32 = space
    */

    if(keys === undefined || keys.length === 0) {    
      this.dx = 0;
      this.dy = 0;
    } else {
      let key = keys.shift();
      //change increment value here
      let increment = this.radius * 2

      if (key === 38) this.dy = -increment;
      else if (key === 40) this.dy = increment;
      else if (key === 37) this.dx = -increment;
      else if (key === 39) this.dx = increment;
      else if (key === 32) console.log('pew pew');
    }
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
    return;
  }
  requestAnimationFrame(animate);
  ctx1.clearRect(0, 0, ctx1.canvas.clientWidth, ctx1.canvas.clientHeight);
  
  //update multiple
  hero.update();
  if (sprites.length > 1) {
    sprites.forEach((sprite) => {
      sprite.update();
    })
  } else {
    circle1.update();
  }
  
}