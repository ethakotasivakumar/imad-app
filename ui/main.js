console.log('Loaded!');

//moving the image

var img=document.getElementById('logo');
var marginleft=0;

function moveRight(){
    marginleft=marginleft + 10;
    img.style.marginleft=marginleft + 'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,50);
 //   image.style.marginLeft='200px';
}