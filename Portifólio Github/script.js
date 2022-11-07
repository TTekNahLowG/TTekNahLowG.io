const canvas1 = document.getElementById('can1');
const ctx = canvas1.getContext('2d');
function drawCirc(){
    ctx.beginPath();
    ctx.arc(75, 175, 50, 0, 2*Math.PI, true);

    ctx.moveTo(95, 165);

    ctx.arc(75, 165, 20, 0, 2*Math.PI, true);
  
    ctx.moveTo(40, 200);
    
    ctx.arc(110, 200, 0, 0, 0.5*Math.PI, false);
    
    
  
  ctx.fillStyle='yellow';
  ctx.fill();
  ctx.strokeStyle='black';
  ctx.stroke();
} 

drawCirc();