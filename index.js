let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');
let animationFrame;
let px  = 0;
let py  = 0;
let idaX = true;
window.onload = desenha();


function desenha(){
    if(px == canvas.width - 100){
        idaX = false;
        idaYQuadrado();
    }
    if(idaX){
        idaXQuadrado();
    }
    // ctx.beginPath()
    // ctx.moveTo(0,0)
    // ctx.arcTo(350,350,700,0,100)
    // ctx.lineTo(700,0)
    // ctx.stroke()
    // ctx.closePath()
}
function idaXQuadrado(){
    px++
    desenhaQuadrado()
    animationFrame = frameAnimation(desenha);
}
function idaYQuadrado(){
    if(py == canvas.height - 100){
        voltaXQuadrado();
        return;
    }
    py++
    desenhaQuadrado()
    animationFrame = frameAnimation(idaYQuadrado);
}
function voltaXQuadrado(){
    if(px == 0){
        voltaYQuadrado();
        return;
    }
    px--;
    desenhaQuadrado()
    animationFrame = frameAnimation(voltaXQuadrado);
}
function voltaYQuadrado(){
    if(py == 0){
        idaX = true
        desenha();
        return;
    }
    py--;
    desenhaQuadrado()
    animationFrame = frameAnimation(voltaYQuadrado);
}

function desenhaQuadrado(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00f';
    ctx.fillRect(px,py,100,100);
}
function frameAnimation(animationFrame) {
     requestAnimationFrame(animationFrame);
}