//question: make a function that can receive infinite params and arrange them all into an array

function makeArray(...args) {
    return array = args;
}

const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const doneBtn = document.getElementById('done-btn');
const newBtn = document.getElementById('new-btn');
const displayNums = document.getElementById('display-nums');
const displayArr = document.getElementById('display-arr');
const savedNums = [];

function addNewNum() {
    let num = input.value;
    if (num === '') {
        displayArr.innerHTML = 'ERR! Can\'t add empty value to array.'
    } else {
        savedNums.push(num);
        displayNums.innerHTML += ` ${num}...`;
        displayArr.innerHTML = '';
        input.value = '';
    }

    return savedNums;
}

addBtn.onclick = function () { addNewNum() };

function displayArray(...arr) {
    //displayNums.innerHTML = '';
    input.value = '';
    return displayArr.innerHTML = `Final array is: ${arr}.`;
}

doneBtn.onclick = function () { displayArray(savedNums) };

function startNewArr() {
    displayNums.innerHTML = 'Adding to array: ';
    displayArr.innerHTML = '';
    savedNums.splice(0, savedNums.length);
    input.value = '';
    return true;
}

newBtn.onclick = function () { startNewArr() };
