// import {Circle} from "./js/sprite.js";

let canvas = document.getElementById("game-canvas"),
    ctx1 = canvas.getContext("2d");

let dx = Math.random() * 3;
let dy = Math.random() * 3;

let circle1 = new Circle(ctx1, 300, 300, dx, dy, 30)

// console.log(ctx1.canvas.clientWidth, ctx1.canvas.clientHeight)
animate();
    