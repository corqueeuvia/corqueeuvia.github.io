const firstPlaceDisplay = document.getElementById("1st");
const secondPlaceDisplay = document.getElementById("2nd");
const thirdPlaceDisplay = document.getElementById("3rd");

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
    let minv = Math.ceil(min);
    let maxv = Math.floor(max);
    return Math.floor(Math.random() * (maxv - minv + 1)) + minv;
}

function assignPlayersVel() {
    velPedro = getRandomVel(minPedro, maxPedro) * (1 - driftPedro);
    velJuca = getRandomVel(minJuca, maxJuca) * (1 - driftJuca);
    velEdna = getRandomVel(minEdna, maxEdna) * (1 - driftEdna);
}

function getGreatest(a, b, c) {
    let greatestAB = (a + b + Math.abs(a - b)) / 2;
    let greatestXC = (greatestAB + c + Math.abs(greatestAB - c)) / 2;
    return greatestXC;
}

function playQuickRace() {
    for (i = 0; i < 10; i++) {
        assignPlayersVel();
        let lapWinner = getGreatest(velPedro, velJuca, velEdna);
        if (lapWinner == velPedro) {
            scorePedro++;
        } else if (lapWinner == velJuca) {
            scoreJuca++;
        } else {
            scoreEdna++;
        }
    }
    console.log(scorePedro, scoreJuca, scoreEdna);
    displayRank();
    resetScore();
}

function playGreatPrize() {
    for (i = 0; i < 70; i++) {
        assignPlayersVel();
        let lapWinner = getGreatest(velPedro, velJuca, velEdna);
        if (lapWinner == velPedro) {
            scorePedro++;
        } else if (lapWinner == velJuca) {
            scoreJuca++;
        } else {
            scoreEdna++;
        }
    }
    console.log(scorePedro, scoreJuca, scoreEdna);
    displayRank();
    resetScore();
}

function playEndurance() {
    for (i = 0; i < 160; i++) {
        assignPlayersVel();
        let lapWinner = getGreatest(velPedro, velJuca, velEdna);
        if (lapWinner == velPedro) {
            scorePedro++;
        } else if (lapWinner == velJuca) {
            scoreJuca++;
        } else {
            scoreEdna++;
        }
    }
    console.log(scorePedro, scoreJuca, scoreEdna);
    displayRank();
    resetScore();
}

function displayRank() {
    let firstPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
    if (firstPlace == scorePedro) {
        firstPlaceDisplay.value = 'Pedro';
        scorePedro = 0;
        let secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace == scoreJuca) {
            secondPlaceDisplay.value = 'Juca';
            thirdPlaceDisplay.value = 'Edna'
        } else {
            secondPlaceDisplay.value = 'Edna';
            thirdPlaceDisplay.value = 'Juca'
        }
    } else if (firstPlace == scoreJuca) {
        firstPlaceDisplay.value = 'Juca';
        scoreJuca = 0;
        let secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace == scorePedro) {
            secondPlaceDisplay.value = 'Pedro';
            thirdPlaceDisplay.value = 'Edna'
        } else {
            secondPlaceDisplay.value = 'Edna';
            thirdPlaceDisplay.value = 'Pedro'
        }
    } else {
        firstPlaceDisplay.value = 'Edna';
        scoreEdna = 0;
        let secondPlace = getGreatest(scorePedro, scoreJuca, scoreEdna);
        if (secondPlace == scorePedro) {
            secondPlaceDisplay.value = 'Pedro';
            thirdPlaceDisplay.value = 'Juca'
        } else {
            secondPlaceDisplay.value = 'Juca';
            thirdPlaceDisplay.value = 'Pedro'
        }
    }
}

function resetScore() {
    scorePedro = 0;
    scoreJuca = 0;
    scoreEdna = 0;
}