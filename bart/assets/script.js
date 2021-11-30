const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let corDoGiz = '#FFFFFF';
let x = 25;
let y = 40;
let phrase = 'Transplantes de órgãos são melhores quando deixados para profissionais';
let phraseCount = 0;
let inputNum = document.getElementById('input-num');

desenhaLousa();

function desenhaGiz(cor, x, y) {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 60, y + 3);
    ctx.lineTo(x + 60, y + 13);
    ctx.lineTo(x, y + 15);
    ctx.fill();
}

function desenhaApagador(x, y) {
    ctx.fillStyle = '#C4A232';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 80, y);
    ctx.lineTo(x + 80, y + 30);
    ctx.lineTo(x, y + 30);
    ctx.fill();
}

function limpaLousa() {
    ctx.fillStyle = '#142918';
    ctx.fillRect(20, 20, 760, 340);
}

function desenhaLousa() {
    ctx.fillStyle = '#734325';
    ctx.fillRect(0, 0, 800, 400); //moldura da lousa
    ctx.fillStyle = '#142918';
    ctx.fillRect(20, 20, 760, 340); //fundo da lousa

    desenhaGiz('#FFFFFF', 530, 360); //branco direita
    desenhaGiz('#FFFFFF', 130, 387); //branco esquerda
    desenhaGiz('#25E86E', 670, 372); //verde
    desenhaGiz('#FFE75D', 40, 377); //amarelo
    desenhaGiz('#51C6ED', 230, 360); //azul
    desenhaGiz('#FF4C7A', 300, 377); //rosa
    desenhaApagador(400, 370);
}

function usaApagador() {
    var areaCanvas = document.getElementById('canvas');
    areaCanvas.onmousedown = function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        if (x > 400 &&
            x < 480 &&
            y > 350) {
            limpaLousa();
        }
    }
}
//função para desenhar texto
function writePhrase(x, y, phrase) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '20px cursive';
    ctx.fillText(phrase, x, y);
}
function punishBart() {
    let repeat = inputNum.value;
    while (phraseCount < repeat) {
        writePhrase(x, y, phrase);
        phraseCount++;
        y += 30;
    }
}
//código para medir o texto
//var ctx = document.getElementById('canvas').getContext('2d');
//var text = ctx.measureText('textoaqui');
//console.log(text.width);