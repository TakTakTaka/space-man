console.log('generate loaded')

function generate(spd){
  console.log(spd)
  if (gameover) return;
  
  let sprite = new Sprite(ctx1, 600, Math.floor(Math.random() * 400), 3, 0, 15);
  sprites.push(sprite);
  setTimeout(generate, Math.random()*spd, spd);
}