console.log('Loaded!');

//moving the image

var image=document.getElementById('logo');
var marginleft=0;

function moveRight(){
    marginleft=marginleft+10;
    image.marginleft=marginleft+'px';
}

image.onclick=function(){
    var interval=setInterval(moveRight,100)
 //   image.style.marginLeft='200px';
}