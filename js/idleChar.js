console.log('load idleChar.js')

class IdleChar extends Hero {
  constructor(ctx, x, y, dx, dy, radius, img){
    super(ctx, x, y, dx, dy, radius);

    this.img = img;
    this.posture = 0;
    this.changePosture = this.changePosture.bind(this);
  }

  changePosture() {
    if (gameover) return clearInterval(heroPose);
    let self = this;
    if(self.posture !== 2) self.posture++;
    else self.posture = 0;
  }
  
  drawChar(){    
    // canvas.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    //posture at zero
    let cx = 642; //center x and y
    let cy = 590;
    let swidth = 675;
    let sheight = 675;

    if (this.posture === 1){
      cx = 1500;
      cy = 712;
    } else if (this.posture === 2) {
      cx = 2365;
      cy = 697;
    }

    let size = 40; //for width/height
    let sx = cx - swidth/2; //start x and y calculated from centers
    let sy = cy - sheight/2
    this.ctx.drawImage(this.img, sx, sy, swidth, sheight, this.x - size/2, this.y - size/2, size, size);
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