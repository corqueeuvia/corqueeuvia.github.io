let click = false;

const gameArena = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
];

const nextPlayer = document.getElementById("next-player");
const oScoreDisplay = document.getElementById("o-score");
const xScoreDisplay = document.getElementById("x-score");
const winnerSpan = document.getElementById("winner");
const winnerDisplay = document.getElementById("winner-display");
let gameSquare;

let oScore = 0; //times O has won a match
let xScore = 0; //times X has won a match

//sets next player based on click is true or false
function setNextPlayer() {
    if (click) {
        nextPlayer.innerHTML = "X";
    } else if (!click) {
        nextPlayer.innerHTML = "O";
    }
}
//gets element id and sets the parameters to mark correct square 
function assignCoordinates(el) {
    gameSquare = document.getElementById(el.id);
    let id = parseInt(el.id);
    if (id === 0) {
        markSquareIfFalse(0, 0);
    } else if (id === 1) {
        markSquareIfFalse(0, 1);
    } else if (id === 2) {
        markSquareIfFalse(0, 2);
    } else if (id === 10) {
        markSquareIfFalse(1, 0);
    } else if (id === 11) {
        markSquareIfFalse(1, 1);
    } else if (id === 12) {
        markSquareIfFalse(1, 2);
    } else if (id === 20) {
        markSquareIfFalse(2, 0);
    } else if (id === 21) {
        markSquareIfFalse(2, 1);
    } else if (id === 22) {
        markSquareIfFalse(2, 2);
    }
    searchWinner();
    console.log(`clique é ${click}`);
    console.log(gameArena);
}
//verifies if square is empty and marks it according to current player
function markSquareIfFalse(x, y) {
    if (gameArena[x][y] === false) {
        if (click) {
            gameSquare.innerHTML = "X";
            gameArena[x][y] = 1;
        } else {
            gameSquare.innerHTML = "O";
            gameArena[x][y] = 10;
        }
        click = !click;
        setNextPlayer();
    }
}

//verifies sum and determines winner accordingly
function checkSum(sum) {
    if (sum === 3) {
        xScore++;
        freezeGameField();
    } else if (sum === 30) {
        oScore++;
        freezeGameField();
    }
    oScoreDisplay.innerHTML = oScore;
    xScoreDisplay.innerHTML = xScore;
}
//checks each row sum to declare winner
function checkRows() {
    gameArena[0].forEach(getRowSum);
    rowSum = 0;
    gameArena[1].forEach(getRowSum);
    rowSum = 0;
    gameArena[2].forEach(getRowSum);
    rowSum = 0;
}
//gets row sum if squares are marked
function getRowSum(element) {
    if (element !== false) {
        rowSum += element;
    }
    checkSum(rowSum);
}
//gets and check columns sum if squares are marked
function searchWinner() {
    let sum = 0;
    //check columns
    for (let i = 0; i < gameArena.length; i++) {
        for (let j = 0; j < gameArena.length; j++) {
            if (gameArena[j][i] !== false) {
                sum += gameArena[j][i]
            }
        }
        checkSum(sum);
        sum = 0;
    }
    //check rows
    for (let i = 0; i < gameArena.length; i++) {
        for (let j = 0; j < gameArena.length; j++) {
            if (gameArena[i][j] !== false) {
                sum += gameArena[i][j]
            }
        }
        checkSum(sum);
        sum = 0;
    }
    //check left-to-right diagonal 
    for (let i = 0; i < gameArena.length; i++) {
        if (gameArena[i][i] !== false) {
            sum += gameArena[i][i];
        }
    }
    checkSum(sum);
    console.log(sum);
    //check right-to-left diagonal
    if (gameArena[2][0] &&
        gameArena[1][1] &&
        gameArena[0][2] !== false) {
        sum = gameArena[2][0] + gameArena[1][1] + gameArena[0][2];
        checkSum(sum);
        sum = 0;
    }
}
function clearGameField() {
    let theId;
    //gameSquare = document.getElementById(theId);
    for (let i = 0; i < gameArena.length; i++) {
        for (let j = 0; j < gameArena.length; j++) {
            theId = "" + i + j;
            gameSquare = document.getElementById(theId);
            gameSquare.innerHTML = "";
        }
    }
}
//sets gameArena to 0 so players can't mark squares anymore
function freezeGameField() {
    for (let i = 0; i < gameArena.length; i++) {
        for (let j = 0; j < gameArena.length; j++) {
            gameArena[i][j] = 0;
        }
    }
}
//ends a match without reseting players score
function startNewMatch() {
    nextPlayer.innerHTML = "O";
    click = false;
    for (let i = 0; i < gameArena.length; i++) {
        for (let j = 0; j < gameArena.length; j++) {
            gameArena[i][j] = false;
        }
    }
    clearGameField();
}