const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let corDoGiz = '#FFFFFF';
let x = 25;
let y = 40;
let phrase = '';
let phraseCount = 0;
let eraseCount = 0;
const inputNum = document.getElementById('input-num');
const phraseCollection = ['EU NÃO GRITAREI “FOGO” EM UMA SALA DE AULA CHEIA', 'EU NÃO SOU UMA VELHA DE 32 ANOS','ASSOPRAR BOLINHAS DE PAPEL NÃO É LIBERDADE DE EXPRESSÃO','CAFÉ NÃO É PARA CRIANÇAS','EU NÃO ESTOU AUTORIZADO A DEMITIR PROFESSORAS SUBSTITUTAS','EU NÃO VOU PASSAR SABÃO NAS ESCADAS','CUECÃO NÃO É SAUDÁVEL ​​PARA AS CRIANÇAS E OUTROS SERES VIVOS','NÃO É NECESSÁRIO HAVER FOGO PARA O TREINAMENTO DE INCÊNDIO','NÃO HÁ NENHUM DEUS ROMANO CHAMADO PEIDACUS','UM MACACO TREINADO NÃO PODE DAR AULA','EU NÃO POSSO TER UM ESTUDANTE SUBSTITUTO','SÓ FORNECEREI AMOSTRA DE URINA QUANDO PEDIDO','UM ARROTO ENGARRAFADO NÃO É PROJETO DE CIÊNCIAS','EU NÃO VOU ESPECULAR SOBRE QUANTO O PROFESSOR PODE SER SEXY','MELECA NÃO É MARCADOR DE LIVRO','JE NE PARLE PAS FRANÇAIS','NÃO ESTAMOS NUS DEBAIXO DAS ROUPAS','A CAPITAL DE MONTANA NÃO É HANNAH','O BATMAN NÃO É NADA SEM SEU CINTO DE UTILIDADES','QUANDO EU DORMI NA SALA DE AULA NÃO ERA PARA AJUDAR O LEO DICAPRIO','AS ÚLTIMAS PALAVRAS DE JESUS NÃO FORAM "GRAÇAS À DEUS É SEXTA-FEIRA"','NÃO SE PODE FAZER PEGADINHA DE 1º DE ABRIL NO DIA 27','BONECOS DE NEVE NÃO TÊM PÊNIS DE CENOURA']

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
    ctx.fillStyle = '#fff';
    eraseCount++;
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
//função para desenhar texto
function writePhrase(x, y, phrase) {
    ctx.fillStyle = '#fff';
    ctx.font = '16px cursive';
    ctx.fillText(phrase, x, y);
}
function punishBart() {
    resetAll();
    getRandomSentence();
    let repeat = inputNum.value;
    while (phraseCount < repeat) {
        writePhrase(x, y, phrase);
        phraseCount++;
        counter++;
        y += 30;
    }
}
function resetAll() {
    y = 40;
    limpaLousa();
    phraseCount = 0;
    counter = 0;
}
function getRandomSentence() {
    let min = Math.ceil(0);
    let max = Math.floor(23);
    let phraseNum = Math.floor(Math.random() * (max - min)) + min;
    phrase = phraseCollection[phraseNum];
  }