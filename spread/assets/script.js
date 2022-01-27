// ======================================================================================

//question 1: make a function to multiply 4 numbers and use the spread syntax to add an array as parameter

const multiplyInput = document.getElementById("multiply-input");   //capture input to display result
const multiplyButton = document.getElementById("multiply-btn"); //capture button to set event listener
const numsList = [4, 3, 5, 7]; //mock data to set an array

function multiplyNums(a = 1, b = 1, c = 1, d = 1) { //function to multiply 4 numbers
    return multiplyInput.value = a * b * c * d;             // received as parameters
}

multiplyButton.onclick = function () { multiplyNums(...numsList) }; //set button to multiply using spread

// ========================================================================================
// ====================================== END =============================================
// ========================================================================================

//question 2: make a function that gets 2 vectors and displays one single concatenated vector using spread
const listInput = document.getElementById("list-input");   //capture input to display result
const listButton = document.getElementById("list-btn"); //capture button to set event listener

const topThreePrimeNumbers = [2, 3, 5]; //mock data for array 1
const topThreePiDigits = [3, 1, 4]; //mock data for array 2

function joinArrays(arr1, arr2) {           //function that concatenates 2 arrays using spread
    return listInput.value = [...arr1, ...arr2]; // and displays it in the input field
}

listButton.onclick = function () { joinArrays(topThreePrimeNumbers, topThreePiDigits) }; //set button to execute it

// ========================================================================================
// ====================================== END =============================================
// ========================================================================================

//question 3: make a function to generate 10 random numbers from 1 to 100 and store them in a vector, then return the greatest of all (use a combination of spread and Math library)

function getRandomBetween(min, max) {       //function to get a random number in
    min = Math.ceil(min);                   // the specified range
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const tenRandomNums = []; //array to store random generated nums

function getTenNums() {                // function to get ten random numbers
    if (tenRandomNums.length === 10) { // into the array if array is empty
        tenRandomNums.splice(0, tenRandomNums.length);
    }
    for (let i = 0; i < 10; i++) {
        tenRandomNums.push(getRandomBetween(1, 100)); 
    }
    //console.log(tenRandomNums);
    return randomInput.value = tenRandomNums;
}

const randomButton = document.getElementById("random-btn"); //capture button to set event listener
const randomInput = document.getElementById("random-input");   //capture input to display numbers

randomButton.onclick = function () { getTenNums() }; //set button to execute it

function getGreatestAmong(arrayOfNumbers) {
    return greatestInput.value = Math.max(...arrayOfNumbers);
}

const greatestInput = document.getElementById('greatest-input'); //capture input to show greatest
const greatestButton = document.getElementById('greatest-btn'); //capture button to check greatest

greatestButton.onclick = function () { getGreatestAmong(tenRandomNums) }; //set button to show greatest