// sortAscending()();
const input_a = document.getElementById("in-a");
const input_b = document.getElementById("in-b");
const input_c = document.getElementById("in-c");
const input_d = document.getElementById("in-d");

const output_a = document.getElementById("out-a");
const output_b = document.getElementById("out-b");
const output_c = document.getElementById("out-c");
const output_d = document.getElementById("out-d");

let a = 0;
let b = 0;
let c = 0;
let d = 0;

let saved = false;

function saveNumbers() {
    a = input_a.value;
    b = input_b.value;
    c = input_c.value;
    d = input_d.value;
    if (a === '' &&
        b === '' &&
        c === '' &&
        d === '') {
        output_a.value = '#### OPS! ####';
        output_b.value = '<------------------------';
        output_c.value = 'MUST TYPE IN THE';
        output_d.value = 'NUMBERS TO SAVE';

    } else {
        saved = true;
        displayNumbers();
        clearInput();
    }
}

function reverseNumbers() {
    if (saved) {
        let inputNumbers = [a, b, c, d];
        let reverseNumbers = [];
        let counter = (inputNumbers.length) - 1;

        while (counter >= 0) {
            let num = inputNumbers[counter];
            reverseNumbers.push(num);
            counter--;
        }

        output_a.value = reverseNumbers[0];
        output_b.value = reverseNumbers[1];
        output_c.value = reverseNumbers[2];
        output_d.value = reverseNumbers[3];
    } else {
        showError('REVERSING');
    }
}

function sortAscending() {
    if (saved) {
        let inputNumbers = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];
        inputNumbers.sort(function (a, b) {
            return a - b;
        });

        output_a.value = inputNumbers[0];
        output_b.value = inputNumbers[1];
        output_c.value = inputNumbers[2];
        output_d.value = inputNumbers[3];

        console.log(inputNumbers);
    } else {
        showError('ASCENDING');
    }
}

function getRandomNumbers() {
    input_a.value = getRandomInt(0, 1000);
    input_b.value = getRandomInt(20, 10000);
    input_c.value = getRandomInt(100, 10999);
    input_d.value = getRandomInt(50, 500);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function displayNumbers() {
    output_a.value = a;
    output_b.value = b;
    output_c.value = c;
    output_d.value = d;
}

function clearMemory() {
    memo_a = '';
    memo_b = '';
    memo_c = '';
    memo_d = '';
    saved = false;
}

function clearOutput() {
    output_a.value = '';
    output_b.value = '';
    output_c.value = '';
    output_d.value = '';
}

function clearInput() {
    input_a.value = '';
    input_b.value = '';
    input_c.value = '';
    input_d.value = '';
}

function resetPage() {
    clearMemory();
    clearOutput();
    clearInput();
}

function showError(action) {
    output_a.value = '#### ERROR! ####';
    output_b.value = '<------------------------';
    output_c.value = 'SAVE THE NUMBERS';
    output_d.value = 'BEFORE ' + action;
}