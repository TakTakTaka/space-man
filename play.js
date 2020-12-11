console.log('cheese')

let canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

  ctx.beginPath();

  // Arc Operation
  ctx.arc(50, 50, 30, 0, Math.PI * 2, false);

  // Fill Stroke
  ctx.stroke();
    