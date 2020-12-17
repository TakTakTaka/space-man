let canvas = document.getElementById("game-canvas"),
    ctx1 = canvas.getContext("2d");

let gameover = false;

let gameDetails = {

}

//idleChar
let idleCharImg = new Image();
idleCharImg.src = './imgs/spaceMan.png';

//Create alien images for 
let alienImg0 = new Image();
alienImg0.src = './imgs/alien/alien1.png';
gameDetails.alien0 = alienImg0;

let alienImg1 = new Image();
alienImg1.src = './imgs/alien/alien1.png';
gameDetails.alien1 = alienImg1;

let alienImg2 = new Image();
alienImg2.src = './imgs/alien/alien2.png';
gameDetails.alien2 = alienImg2;

gameDetails.alienPosture = 0;

function updateAlien() {
  if (gameover) return clearInterval(alienPose);
  if (gameDetails.alienPosture !== 2) gameDetails.alienPosture++;
  else gameDetails.alienPosture = 0;
}

let alienPose = setInterval(updateAlien, 200)


let radius = 16
let idleChar = new IdleChar(ctx1, 10, 200, 0, 0, radius, idleCharImg);
let hero = idleChar;
let heroPose = setInterval(hero.changePosture, 300);

// let hero = new Hero(ctx1, 10, 200, 0, 0, 10)
let sprites = [];
let bullets = [];
let gameScore = 0;

let gameScoreHTML = document.getElementById('game-score')


// console.log(ctx1.canvas.clientWidth, ctx1.canvas.clientHeight)
// let gameover = false;
generate(500); //control speed of generation (ms)
animate();