var context;
var x=100;
var y=50;
var dx=5;
var dy=5;


function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  //get width of current container

    context.clearRect(0,0,600,150);
    context.beginPath();
    context.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    context.arc(x,y,10,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    // Boundary Logic
  if( x<10 || x>590) dx=-dx; 
  if( y<10 || y>140) dy=-dy; 
  x+=dx; 
  y+=dy;
}