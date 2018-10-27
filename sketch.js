var song1;
var song2;

function setup() {
  song1 = loadSound('music01.mp3');
  song2 = loadSound('music02.mp3')
  createCanvas(720, 200);
  background(255,0,0);
}

function draw() {
  rect(0, 0, 720, 40);
  rect(0, 40, 720, 40);
}
 

function mousePressed() {
   x = mouseX,
   y = mouseY;
  if (y<40){ 
  if ( song1.isPlaying() ) { // .isPlaying() returns a boolean
    song1.stop();
    background(255,0,0);
  } else {
    song1.play();
    background(0,255,0);
  }
}else if (y>40 && y<80)
    if ( song2.isPlaying() ) { // .isPlaying() returns a boolean
    song2.stop();
    background(255,0,0);
  } else {
    song2.play();
    background(0,255,0);
  }
}
