let click = 0;
let player = '';

const gameArena = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

const nextPlayer = document.getElementById("next-player");

const oScoreDisplay = document.getElementById("o-score");
const xScoreDisplay = document.getElementById("x-score");

let oScore = 0;
let xScore = 0;

const winnerSpan = document.getElementById("winner");
const winnerDisplay = document.getElementById("winner-display");

function countClick() {
    click++;
    console.log(click);
}
function setPlayer(id) {

    countClick();
    const gameSquare = document.getElementById(id);
    if (click % 2 == 1) { //odd click
        player = "O"
        gameSquare.innerHTML = player;
    } else {
        player = "X"
        gameSquare.innerHTML = player;
    }
    displayNextPlayer();

    markSquareById(id);

    searchWinner();

}
function markSquareById(id) {
    if (id == "00") {
        gameArena[0][0] = player;
    } else if (id == "01") {
        gameArena[0][1] = player;
    } else if (id == "02") {
        gameArena[0][2] = player;
    } else if (id == "10") {
        gameArena[1][0] = player;
    } else if (id == "11") {
        gameArena[1][1] = player;
    } else if (id == "12") {
        gameArena[1][2] = player;
    } else if (id == "20") {
        gameArena[2][0] = player;
    } else if (id == "21") {
        gameArena[2][1] = player;
    } else {
        gameArena[2][2] = player;
    }
    console.log(gameArena);
}
function displayNextPlayer() {
    if (player == "O") {
        nextPlayer.innerHTML = "X";
    } else {
        nextPlayer.innerHTML = "O";
    }
}
function cleanArena() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameArena[i][j] = "-"
            let id = "" + i + j;
            const gameSquare = document.getElementById(id);
            gameSquare.innerHTML = "";
        }
    }
    player = "";
    click = 0;
}
function reset() {
    cleanArena();
    click = 0;
    player = "";
    oScore = 0;
    xScore = 0;
    oScoreDisplay.innerHTML = oScore;
    xScoreDisplay.innerHTML = xScore;
}

function searchWinner() {
    let winner = "";
    if (click > 4) {
        if (gameArena[0][0] == "O" && gameArena[0][1] == "O" && gameArena[0][2] == "O" ||
            gameArena[1][0] == "O" && gameArena[1][1] == "O" && gameArena[1][2] == "O" ||
            gameArena[2][0] == "O" && gameArena[2][1] == "O" && gameArena[2][2] == "O") {
            oWins();
        } else if (gameArena[0][0] == "X" && gameArena[0][1] == "X" && gameArena[0][2] == "X" ||
            gameArena[1][0] == "X" && gameArena[1][1] == "X" && gameArena[1][2] == "X" ||
            gameArena[2][0] == "X" && gameArena[2][1] == "X" && gameArena[2][2] == "X") {
            xWins();
        }
    }
}
function oWins() {
    oScore++;
    oScoreDisplay.innerHTML = oScore;
    winnerSpan.innerHTML = "O";
    winnerDisplay.setAttribute("hidden", "0");
}
function xWins() {
    xScore++;
    xScoreDisplay.innerHTML = xScore;
    winnerSpan.innerHTML = "X";
    winnerDisplay.setAttribute("hidden", "0");
}
