function multiplyBy(number) {
    return function multiply(byNumber) {
        return display.innerHTML = `${byNumber} x ${number} = ${(number * byNumber)}`;
    }
}

//capture html elements to get and display info
const input = document.getElementById('input');
const display = document.getElementById('display');

//set multiplier to attribute to button
const multiply2By = multiplyBy(2);
const multiply5By = multiplyBy(5);
const multiply10By = multiplyBy(10);