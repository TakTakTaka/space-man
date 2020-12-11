import Circle from "./js/sprite";

let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  // console.log(ctx)

  ctx.beginPath();

  // Arc Operation
  ctx.arc(50, 50, 30, 0, Math.PI * 2, false);

  // Fill Stroke
  ctx.stroke();

let circle1 = new Circle(ctx, 150, 150, 0, 0, 10)
    