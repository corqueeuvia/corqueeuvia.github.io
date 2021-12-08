//getting all input fields to recieve user's numbers
const input_a = document.getElementById("in-a");
const input_b = document.getElementById("in-b");
const input_c = document.getElementById("in-c");
const input_d = document.getElementById("in-d");

//getting all output fields to display results
const output_a = document.getElementById("out-a");
const output_b = document.getElementById("out-b");
const output_c = document.getElementById("out-c");
const output_d = document.getElementById("out-d");

//variables to store numbers
let a = 0;
let b = 0;
let c = 0;
let d = 0;

//storage verification
let saved = false;

//get values from input fields and stores into variables
function saveNumbers() {
    a = input_a.value;
    b = input_b.value;
    c = input_c.value;
    d = input_d.value;

    //error verification not to store empty values
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

//get values into an array and reverse its position
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

//sort values and display them in ascending order
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

//generate random numbers for the input fields so user doesn't need to pick any
function getRandomNumbers() {
    input_a.value = getRandomInt(0, 1000);
    input_b.value = getRandomInt(20, 10000);
    input_c.value = getRandomInt(100, 10999);
    input_d.value = getRandomInt(50, 500);
}

//get a random number in specified range (used in getRandomNumbers above)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//send values into output fields after sorting, reversing or saving
function displayNumbers() {
    output_a.value = a;
    output_b.value = b;
    output_c.value = c;
    output_d.value = d;
}

//clear outputfields not to display any value (used in resetPage function)
function clearOutput() {
    output_a.value = '';
    output_b.value = '';
    output_c.value = '';
    output_d.value = '';
}

//clear input fields so they don't show any value (used in resetPage and saveNumbers functions)
function clearInput() {
    input_a.value = '';
    input_b.value = '';
    input_c.value = '';
    input_d.value = '';
}

//reset page to its initial state (used on button reset)
function resetPage() {
    clearOutput();
    clearInput();
}

//display custom error message into output fields depending on the action attempted
function showError(action) {
    output_a.value = '#### ERROR! ####';
    output_b.value = '<------------------------';
    output_c.value = 'SAVE THE NUMBERS';
    output_d.value = 'BEFORE ' + action;
}