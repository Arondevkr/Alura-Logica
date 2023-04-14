
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput=document.getElementById('Name');
const botodescarga=document.getElementById('Descargalite'); 


var tiempo = new Date().toLocaleTimeString();

const image = new Image()
image.src ="cer.jpg"
const image2 = new Image()
image2.src ="mini.png"

image.onload = function(){
    drawImage();
}

function drawImage(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(image2, canvas.width/2.5, canvas.width/2.3, 160, 70);
    ctx.font = '70px Bonitto';
    ctx.fillStyle = 'white';
    ctx.textAlign = "center";
    ctx.fillText(nameInput.value, canvas.width/2, 400);

    ctx.font = '30px Aileron SemiBold';
    ctx.fillStyle = '#41DDED';
    //ctx.textAlign = "center";
    ctx.fillText('Cerificado de Aprovacion', canvas.width/5, 700);

    ctx.font = '30px Aileron SemiBold';
    ctx.fillStyle = '#41DDED';
    //ctx.textAlign = "center";
    ctx.fillText(tiempo, canvas.width/1.3, 700);



}

nameInput.addEventListener('input', function(){
    const name = nameInput.value;
    drawImage();
});

botodescarga.addEventListener('click', function(){
    botodescarga.href = canvas.toDataURL('image/jpg');
    botodescarga.download = 'Certificado.jpg';

});