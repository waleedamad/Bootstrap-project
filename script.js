document.getElementById("unique").innerHTML='we are learning javascript';
document.getElementById("btnof").onclick=function(){
    document.getElementById("bulb").src="./images/pic_bulboff.gif";
    document.getElementById("body").style.backgroundColor="black"; 
}
document.getElementById("btnon").onclick=function(){
    document.getElementById("bulb").src="./images/pic_bulbon.gif";
    document.getElementById("body").style.backgroundColor="white"; 
}