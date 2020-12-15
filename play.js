// import {Circle} from "./js/sprite.js";

let canvas = document.getElementById("game-canvas"),
    ctx1 = canvas.getContext("2d");

let dx = Math.random() * 3;
let dy = Math.random() * 3;

// let circle1 = new Circle(ctx1, 300, 100, dx, dy, 30);
// let circle2 = new Circle(ctx1, 100, 100, 0, 0, 20);
let gameover = false;

//idleChar
let idleCharImg = new Image();
// idleCharImg.src = '/Users/takanori.sono/dev/space-man/imgs/hero_char.png';
idleCharImg.src = '/Users/takanori.sono/dev/space-man/imgs/spaceMan.png';
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