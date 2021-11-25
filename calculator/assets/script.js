//declaring functions ------------------------------------------------
function addNumbers() {
    clearOutputArea();
    operation = "ADIÇÃO";
    operationSpan.innerHTML = operation;

    getXandY();
    result = x + y;
    checkError();
    return result;
 }
function subtractNumbers() {
    clearOutputArea();
    operation = "SUBTRAÇÃO";
    operationSpan.innerHTML = operation;

    getXandY();
    result = x - y;
    return result;
 }
function multiplyNumbers() {
    clearOutputArea();
    operation = "MULTIPLICAÇÃO";
    operationSpan.innerHTML = operation;

    getXandY();
    result = x * y;
    return result;
 }
function divideNumbers() {
    clearOutputArea();
    operation = "DIVISÃO";
    operationSpan.innerHTML = operation;

    getXandY();
    result = x / y;
    return result;
}
function getXandY() {
    x = parseFloat(xInput.value);
    y = parseFloat(yInput.value);
    return true;
}

function clearAll() {
    xInput.value = "";
    yInput.value = "";
    resetIntro();
}

function clearOutputArea() {
    operationSpan.innerHTML = "";
    resultSpan.innerHTML = "";
}

function resetIntro() {
    operationSpan.innerHTML = "A W E S O M E"
    resultSpan.innerHTML = "geek calculator";
}
function showResult() {
    if (operation == "ADIÇÃO") {
        resultSpan.innerHTML = x + " + " + y + " = " + result;
    } else if (operation == "SUBTRAÇÃO") {
        resultSpan.innerHTML = x + " - " + y + " = " + result;      
    } else if (operation == "MULTIPLICAÇÃO") {
        resultSpan.innerHTML = x + " x " + y + " = " + result;
    } else if (operation == "DIVISÃO") {
        resultSpan.innerHTML = x + " / " + y + " = " + result;
    }    
} 
function checkError() {
    if (x == NaN || y == NaN || resultado == NaN) {
        clearOperation();
        resultSpan.innerHTML = "#ERR";
    }
}

// logica
// 1. capturar os inputs (num1, num2 e resultado)
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const operationSpan = document.getElementById("operation-display");
const resultSpan = document.getElementById("result-display");
let x = 0;
let y = 0;
let operation = null;
let result = null;

// 2. 

