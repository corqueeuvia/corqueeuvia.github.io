const firstPlaceDisplay = document.getElementById("first");
const secondPlaceDisplay = document.getElementById("second");
const thirdPlaceDisplay = document.getElementById("third");

const minPedro = 150;
const maxPedro = 230;
const driftPedro = 0.03;

const minJuca = 120;
const maxJuca = 260;
const driftJuca = 0.05;

const minEdna = 180;
const maxEdna = 220;
const driftEdna = 0.01;

let velPedro = 0;
let velJuca = 0;
let velEdna = 0;

let scorePedro = 0;
let scoreJuca = 0;
let scoreEdna = 0;

let winnerName = '';

//function declaration

function getRandomVel(min, max) {
    const minv = Math.ceil(min);
    const maxv = Math.floor(max);
    return Math.floor(Math.random() * (maxv - minv + 1)) + minv;
}

function assignPlayersVel() {
    velPedro = getRandomVel(minPedro, maxPedro) * (1 - driftPedro);
    velJuca = getRandomVel(minJuca, maxJuca) * (1 - driftJuca);
    velEdna = getRandomVel(minEdna, maxEdna) * (1 - driftEdna);
}

function getGreatest(a, b, c) {
    const greatestAB = (a + b + Math.abs(a - b)) / 2;
    const greatestXC = (greatestAB + c + Math.abs(greatestAB - c)) / 2;
    return greatestXC;
}
//a única diferença é o número de voltas (passar como parâmetro no onclick)
function playRace(laps) {
    for (let i = 0; i < laps; i++) {
        assignPlayersVel();
        const lapWinner = getGreatest(velPedro, velJuca, velEdna);
        //pedro com vantagem em caso de empate
        if (lapWinner === velPedro) {
            scorePedro++;
        } else if (lapWinner === velJuca) {
            scoreJuca++;
        } else {
            scoreEdna++;
        }
    }
    displayRank();
    resetScore();
}

function displayRank() {
    let firstPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
    if (firstPlace === scorePedro) {
        firstPlaceDisplay.value = "Pedro";
        scorePedro = 0;
        let secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace === scoreJuca) {
            secondPlaceDisplay.value = "Juca";
            thirdPlaceDisplay.value = "Edna"
        } else {
            secondPlaceDisplay.value = "Edna";
            thirdPlaceDisplay.value = "Juca"
        }
    } else if (firstPlace === scoreJuca) {
        firstPlaceDisplay.value = "Juca";
        scoreJuca = 0;
        let secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace === scorePedro) {
            secondPlaceDisplay.value = "Pedro";
            thirdPlaceDisplay.value = "Edna"
        } else {
            secondPlaceDisplay.value = "Edna";
            thirdPlaceDisplay.value = "Pedro"
        }
    } else {
        firstPlaceDisplay.value = "Edna";
        scoreEdna = 0;
        const secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace == scorePedro) {
            secondPlaceDisplay.value = "Pedro";
            thirdPlaceDisplay.value = "Juca"
        } else {
            secondPlaceDisplay.value = "Juca";
            thirdPlaceDisplay.value = "Pedro"
        }
    }
}

function resetScore() {
    scorePedro = 0;
    scoreJuca = 0;
    scoreEdna = 0;
    return true;
}