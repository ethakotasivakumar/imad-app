console.log('Loaded!');

//moving the image

var image=document.getElementById('logo');
image.onclick=function(){
    var interval=setInterval(moveLeft,100)
 //   image.style.marginLeft='200px';
}