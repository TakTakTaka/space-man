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
      if (key === 38) this.dy = -this.radius;
      else if (key === 40) this.dy = this.radius;
      else if (key === 37) this.dx = -this.radius;
      else if (key === 39) this.dx = this.radius;
    }
  }
  
  update(){
    //use key press for hero
    this.controls();

    if (this.x + this.radius >= this.ctx.canvas.clientWidth || this.x - this.radius < 0) {
      this.dx = 0;
    }

    if (this.y + this.radius > this.ctx.canvas.clientHeight || this.y - this.radius < 0) {
      this.dy = 0;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx1.clearRect(0, 0, ctx1.canvas.clientWidth, ctx1.canvas.clientHeight);
  
  //update multiple
  if (sprites.length > 1) {
    sprites.forEach((sprite) => {
      sprite.update();
    })
  } else {
    circle1.update();
  }
  
}