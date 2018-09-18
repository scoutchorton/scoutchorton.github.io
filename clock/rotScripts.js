console.clear();
function eId(i){return document.getElementById(i)}
Math.radians=function(degrees){return(degrees*(Math.PI/180));};
Math.degrees=function(radians){return(radians*(180/Math.PI));};
function getTime(v=0){
  //v
    //0=hour
    //1=minutes
    //2=seconds
  //Return time
  var a="A.M.";
  var d=[new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()];
  if(d[0]>12){
    d[0]=d[0]-12;
    a="P.M.";
  }
  if(v===3){
    d[1]=("0"+(d[1])).slice(-2);
    d[2]=("0"+(d[2])).slice(-2);
    return([d,a]);
  }
  //Convert to radians
  d[0]=Math.radians((d[0]*30)-90);
  d[1]=Math.radians((d[1]*6)-90);
  d[2]=Math.radians((d[2]*6)-90);
  //End
  return(d[v]);
}
window.onload=function(){
	let h=eId('c').style.height=eId('c').style.width=document.body.clientHeight;let w=h;
  setInterval(function(){
    let c=eId('c').getContext('2d');
    c.beginPath();
    //Clear
    c.clearRect(0,0,w,h);
    
    //Minutes
    c.beginPath();
    c.strokeStyle="#d8b74b";
    c.moveTo(w/2,h/2);
    c.translate(w/2,w/2);
    c.rotate(getTime(1));
    c.lineTo(w/2,0);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.stroke();c.closePath();
    
    //Seconds
    c.beginPath();
    c.strokeStyle="#ff0000";
    c.moveTo(w/2,h/2);
    c.translate(w/2,w/2);
    c.rotate(getTime(2));
    c.lineTo(w/2,0);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.stroke();c.closePath();
    
    //Hour
    c.beginPath();
    c.strokeStyle="#be9d31";
    c.moveTo(w/2,h/2);
    c.translate(w/2,w/2);
    c.rotate(getTime());
    c.lineTo((3*(w/2))/4,0);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.stroke();c.closePath();
    
    //Outline
    c.beginPath();
    c.lineWidth=2;
    c.strokeStyle="#000000";
    c.arc(w/2,h/2,(h/2)-2,0,2*Math.PI);
    c.stroke();
    c.closePath();
    
    //Text
    c.beginPath();
    c.fillStyle="#000000";
    c.textBaseline="top";
    var m=getTime(3);
    m[0]=m[0].join(":");
    m=m.join(" ");
    c.textAlign="center";
    c.font=w/7.5+"px Cursive";
    c.fillText(m,(w/2),h/2);
    c.closePath();
  },1/60*1000);
};
