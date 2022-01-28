//question: make a function that can receive infinite params and arrange them all into an array

const input = document.getElementById('input');                 //capturing input,
const addBtn = document.getElementById('add-btn');              //buttons and 
const doneBtn = document.getElementById('done-btn');            //diplay fields
const newBtn = document.getElementById('new-btn');              //to show data
const displayNums = document.getElementById('display-nums');    //and results
const displayArr = document.getElementById('display-arr');
const savedNums = [];                                          //array to store inputed nums

function addNewNum() {                  //add new input into
    let num = input.value;              //array if num is valid
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

addBtn.onclick = function () { addNewNum() }; //set button to add new number

function displayArray(...arr) {         //display final array on screen
    input.value = '';
    return displayArr.innerHTML = `Final array is: ${arr}.`;
}

doneBtn.onclick = function () { displayArray(savedNums) }; //set button to display array

function startNewArr() {                            //reset savedNums array
    displayNums.innerHTML = 'Adding to array: ';    //so user can create a
    displayArr.innerHTML = '';                      //new array from scratch
    savedNums.splice(0, savedNums.length);
    input.value = '';
    return true;
}

newBtn.onclick = function () { startNewArr() }; //set button to reset array
