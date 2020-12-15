let canvas = document.getElementById("game-canvas"),
    ctx1 = canvas.getContext("2d");

let gameover = false;

//idleChar
let idleCharImg = new Image();
// idleCharImg.src = '/Users/takanori.sono/dev/space-man/imgs/spaceMan.png';
idleCharImg.src = './imgs/spaceMan.png';
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