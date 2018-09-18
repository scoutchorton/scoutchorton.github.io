console.clear();
function eId(i){return document.getElementById(i)}
Math.radians=function(degrees){return(degrees*(Math.PI/180));};
Math.degrees=function(radians){return(radians*(180/Math.PI));};
function getTime(v=0){
  //v
    //0=hour
    //1=minutes
    //2=seconds
    //
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
  //eId('d').innerHTML="Time: "+d[2]+"<br>Angle: "+d[2]*6+"<br> Inverted Angle: "+-(d[2]*6)+"<br> Corrected Angle: "+(-(d[2]*6))+"<br> Corrected Angle (Radians): "+Math.radians(-(d[2]*6))+"<br> 90 Degrees (Radians): "+Math.radians(-90);
  //End
  return(d[v]);
}
window.onload=function(){
	let h=eId('c').height=eId('c').width=document.body.clientHeight;let w=h;
  setInterval(function(){
    let c=eId('c').getContext('2d');
    c.beginPath();
    //Clear
    c.clearRect(0,0,w,h);
    
    //Hour
    c.beginPath();
    c.strokeStyle="#be9d31";
    c.moveTo(w/2,h/2);
    c.lineTo(((3*w)/8)*Math.cos(Math.radians((getTime()*30)-90))+(w/2),((3*w)/8)*Math.sin(Math.radians((getTime()*30)-90))+(w/2));
    c.stroke();c.closePath();
    
    //Minutes
    c.beginPath();
    c.strokeStyle="#d8b74b";
    c.moveTo(w/2,h/2);
    c.lineTo((w/2)*Math.cos(Math.radians((getTime(1)*6)-90))+(w/2),(w/2)*Math.sin(Math.radians((getTime(1)*6)-90))+(w/2));
    c.stroke();c.closePath();
    
    //Seconds
    c.beginPath();
    c.strokeStyle="#ff0000";
    c.moveTo(w/2,h/2);
    c.lineTo((w/2)*Math.cos(Math.radians((getTime(2)*6)-90))+(w/2),(w/2)*Math.sin(Math.radians((getTime(2)*6)-90))+(w/2));
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
