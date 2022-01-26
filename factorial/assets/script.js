const input = document.getElementById('input');
const display = document.getElementById('display');

//captures input value after it has been typed in
function useInputValue() {

    let n = input.value;

    if (n === '') {
        return error();
    }

    n = parseInt(input.value);

    if (n === 0 || n > 170) {
        return error();
    }

    return display.innerHTML = `<strong>${n}! = ${getFactorial(n)}</strong>`;
}

//calculates factorial of given number
function getFactorial(n) {

    if (n === 1) {

        return n;
    }

    return n * getFactorial(n - 1);
}

function error() {
    return display.innerHTML = `Digite um número de <strong>1 a 170</strong>`;
}