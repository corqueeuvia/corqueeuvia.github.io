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

//array to store variables
let savedNums = [];

//storage verification
let saved = false;

//get values from input fields and stores into variables
function saveNumbers() {
    const a = input_a.value;
    const b = input_b.value;
    const c = input_c.value;
    const d = input_d.value;

    //error verification not to store empty values
    if (a === '' ||
        b === '' ||
        c === '' ||
        d === '') {
        output_a.value = '#### OPS! ####';
        output_b.value = '<------------------------';
        output_c.value = 'MUST TYPE IN 4';
        output_d.value = 'NUMBERS TO SAVE';

    } else {
        saved = true;
        savedNums[0] = a;
        savedNums[1] = b;
        savedNums[2] = c;
        savedNums[3] = d;
        displayNumbers();
        clearInput();
    }
    return true;
}

//get values into an array and reverse its position
function reverseNumbers() {
    if (saved) {

        let counter = (savedNums.length) - 1;
        const reverseNumbers = [];
        while (counter >= 0) {
            let num = savedNums[counter];
            reverseNumbers.push(num);
            counter--;
        }

        savedNums = reverseNumbers;

        displayNumbers();
    } else {
        showError('REVERSING');
    }
    return true;
}

//sort values and display them in ascending order
function sortAscending() {
    if (saved) {
        let ascending = changeToIntegers(savedNums);
        let hold = 0;

        for (let i = 0; i < ascending.length; i++) {
            for (let j = 0; j < ascending.length; j++) {
                if (ascending[i] < ascending[j]) {
                    hold = ascending[i];
                    ascending[i] = ascending[j];
                    ascending[j] = hold;
                }
            }
        }
        savedNums = ascending;

        displayNumbers();

    } else {
        showError('ASCENDING');
    }
    return true;
}


//generate random numbers for the input fields so user doesn't need to pick any
function getRandomNumbers() {
    input_a.value = getRandomInt(0, 1000);
    input_b.value = getRandomInt(20, 10000);
    input_c.value = getRandomInt(100, 10999);
    input_d.value = getRandomInt(50, 500);
    saved = false;
    clearMemory();
    return true;
}

//get a random number in specified range (used in getRandomNumbers above)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//send values into output fields after sorting, reversing or saving
function displayNumbers() {
    output_a.value = savedNums[0];
    output_b.value = savedNums[1];
    output_c.value = savedNums[2];
    output_d.value = savedNums[3];
    return true;
}

//clear outputfields not to display any value (used in resetPage function)
function clearOutput() {
    output_a.value = '';
    output_b.value = '';
    output_c.value = '';
    output_d.value = '';
    return true;
}

//clear input fields so they don't show any value (used in resetPage and saveNumbers functions)
function clearInput() {
    input_a.value = '';
    input_b.value = '';
    input_c.value = '';
    input_d.value = '';
    return true;
}

//reset page to its initial state (used on button reset)
function resetPage() {
    clearOutput();
    clearInput();
    clearMemory();
    saved = false;
    //return !saved (?)
    return true;
}

//display custom error message into output fields depending on the action attempted
function showError(action) {
    output_a.value = '#### ERROR! ####';
    output_b.value = '<------------------------';
    output_c.value = 'SAVE THE NUMBERS';
    output_d.value = 'BEFORE ' + action;
    return true;
}

//forget saved numbers
function clearMemory() {
    savedNums = [];
    return true;
}

//change an array's elements into integers
function changeToIntegers(array) {
    let integers = [];
    for (i = 0; i < array.length; i++) {
        integers.push(parseInt(array[i]));
    }
    return integers;
}