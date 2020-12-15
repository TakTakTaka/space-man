console.log('load idleChar.js')

class IdleChar extends Hero {
  constructor(ctx, x, y, dx, dy, radius, img){
    super(ctx, x, y, dx, dy, radius);

    this.img = img;
    this.posture = 2;
    this.changePosture = this.changePosture.bind(this);
  }

  changePosture() {
    if (gameover) return clearInterval(heroPose);
    let self = this;
    console.log(`here posture changed: ${this.posture}`)  
    if(self.posture !== 2) self.posture++;
      else self.posture = 0;
  }
  
  drawChar(){    
    // canvas.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    //posture at zero
    let offset = 0;
    let size = 50;
    let originX = this.posture * 1000; //1000 x 1000 is img size 
    let originY = 0;
    this.ctx.drawImage(this.img, originX + offset, originY + offset, 1000 - offset*2, 1000 - offset*2, this.x - size/2, this.y - size/2, size, size);
    
    // this.ctx.drawImage(this.img, 1000, 0, 1000, 1000, this.x - size/2, this.y - size/2, size, size);
    // this.ctx.drawImage(this.img, 0, 0, 1000 - offset/2, 1000 - offset/2, this.x - size/2, this.y - size/2, size, size);
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