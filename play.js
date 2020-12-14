// import {Circle} from "./js/sprite.js";

let canvas = document.getElementById("game-canvas"),
    ctx1 = canvas.getContext("2d");

let dx = Math.random() * 3;
let dy = Math.random() * 3;

let circle1 = new Circle(ctx1, 300, 100, dx, dy, 30);
let circle2 = new Circle(ctx1, 100, 100, 0, 0, 20);

let hero = new Hero(ctx1, 10, 200, 0, 0, 10)
let sprites = [];
let bullets = [];


// console.log(ctx1.canvas.clientWidth, ctx1.canvas.clientHeight)
let gameover = false;
animate();
    