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

function animate(){
  requestAnimationFrame(animate);
  ctx1.clearRect(0, 0, ctx1.canvas.clientWidth, ctx1.canvas.clientHeight);
  circle1.update();
}