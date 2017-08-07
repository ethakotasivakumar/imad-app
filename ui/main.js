console.log('Loaded!');

//moving the image

var img=document.getElementById('logo');
var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight, 50);
 //   image.style.marginLeft='200px';
}