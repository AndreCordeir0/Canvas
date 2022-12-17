let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

let animationFrame;

let inicioRecorte = 0;
window.onload = animation();

function animation(){

    let image = new Image();
    image.src = 'assets/BODY_animation.png';

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = 'assets/BODY_animation.png';
       
        console.log(inicioRecorte);
        image.onload = () =>{
            ctx.drawImage(image,inicioRecorte, 0,64,64,0,0,64,64);
        }
        inicioRecorte += image.width / 8 ;
        if(inicioRecorte > 384 ){
            inicioRecorte = 0;
        }
    }, 100);
    
}

