console.log('load idleChar.js')

class IdleChar extends Hero {
  constructor(ctx, x, y, dx, dy, radius, img){
    super(ctx, x, y, dx, dy, radius);

    this.img = img;
  }

  drawChar(){
    console.log(`size of image: ${this.img.width} x ${this.img.height}`)
    
    // canvas.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    let offset = 300;
    let size = 35;
    this.ctx.drawImage(this.img, 0 + offset, 0 + offset, 1000 - offset, 1000 - offset, this.x - size/2, this.y - size/2, size, size);
  }
  
  update(){
    //update sprite on canvas
    this.controls();

    //alert if collision occurs
    let x = this.x + this.dx;
    let y = this.y + this.dy;


    this.x = (x - this.radius >= 0 && x + this.radius <= this.ctx.canvas.clientWidth) ? this.x + this.dx : this.x;
    this.y = (y - this.radius >= 0 && y + this.radius <= this.ctx.canvas.clientHeight) ? this.y + this.dy : this.y; 

    this.drawChar();
    this.draw();

  }

  
}


//game char:
//game PNG Designed By TheInvisibleMen from <a href="https://pngtree.com/">Pngtree.com</a>