var box=document.getElementById("container");
function getRandomCoordinates(){
var coord=box.getBoundingClientRect();
    return [Math.floor(Math.random() * (window.innerWidth-box.offsetWidth)), Math.floor(Math.random() * (window.innerHeight -box.offsetHeight))];
}
box.onmouseover=function(){
 var coordinates=getRandomCoordinates();  
 console.log(coordinates,box.offsetWidth,box.offsetHeight);
 box.style.transform="translate("+coordinates[0] +"px,"+coordinates[1]+"px)";     

}