$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var x=30;
    var y=30;
    var z=40;
    var w=40;
    for (var i=0;i<10;i++){
    context.fillStyle='rgba(255,165,0,0.3)';
    context.fillRect(x,y,z,w);
    x+=20;
    y+=20;
   }
    
  });