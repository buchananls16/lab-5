var angle = 0.10;
var offset = 150;
var scalar = 30;
var speed = 0.07;
var showoff=false;
var onOff= false;
var rectX, rectY;      // Position of square button
var circle150, circle150;  // Position of circle button
var rectSize = 30;     // Diameter of rect
var circleSize = 50;   // Diameter of circle
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;


function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
  rectColor = color('#9C00FF');
  rectHighlight = color('#22FEF0');
  circleColor = color('#9C00FF');
  circleHighlight = color('#22FEF0');
  baseColor = color(102);
  currentColor = baseColor;
  circleX = width/2+circleSize+10;
  circleY = 3*height/4 + 15;
  rectX = 3*width/4;
  rectY = 3*height/4;
  ellipseMode(CENTER);
}

function draw() {

 update(mouseX, mouseY);
   background(225);
//large rect for outside
  fill(0);
  rect(20,20, 460,450);
  //screen
  if(onOff){
    fill('#F5ABFF');
  }else{
    fill(0);
  }
  rect(width/5, height/5, 350, 197);
  
  
  if(showoff){
  var x = offset +cos(angle)*scalar
  var y = offset +sin(angle)*scalar
  fill('#FFEF7F');
  rect(x,y,40,40);
  angle += speed;
}
  
  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(255);

  rect(rectX, rectY, 2*rectSize, rectSize);
  push();
  fill(255);
  text("CHANNEL", rectX-0, rectY+50);
  pop();
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(255);
  ellipse(circleX, circleY, circleSize, circleSize);
  push();
  fill(255);
  text("POWER", circleX-20, circleY+40);
  pop();

}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, 2*rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
   // currentColor = circleColor;
    onOff=!onOff
  }
  if (rectOver) {
   // currentColor = rectColor;
  showoff=!showoff;
    print(showoff);
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}