//chall 152 easy from NEPS academy

function showNext(numbers) {

    const input = document.getElementById("last-count");

    const output = document.getElementById("display-next-ten");

    const inputNumber = parseInt(input.value);

    input.value = '';

    output.innerHTML = `Keep going! ${inputNumber}...`;

    if (inputNumber >= 0 && inputNumber <= 990) {

        for (let i = 0; i < numbers; i++) {

            let next = inputNumber + i + 1;

            output.innerHTML += ` ${next}!`;
        }

    } else {

        let maxNum = 1000 - numbers;

        output.innerHTML = `OPS! You gotta choose a number between 0 and ${maxNum}.`;
    }
}

//chall 1564 from URI - beecrowd
function checkComplaintsAmount() {

    const input = document.getElementById("complaints");

    const output = document.getElementById("display-hosting");

    let complaints = parseInt(input.value);


    if (complaints >= 0) {

        if (complaints === 0) {

            output.innerHTML = `We're hosting 2014's FIFA World Cup and we're happy about it!`;

        } else {

            output.innerHTML = `HELL YEAH WE'RE HOSTING IT! AND WE'RE DOING IT TWICE!!`;
        }

    } else {

        output.innerHTML = `Nah. You can't have negative complaints, hunny. Try again.`;
    }
    input.value = "";
}

//chall 1059 from URI - beecrowd
function getEvenNumbers(max) {

    const output = document.getElementById("even-numbers");

    output.innerHTML = `The even numbers up to ${max} are 0`;

    for (let i = 1; i <= max; i++) {

        if (i % 2 === 0) {

            output.innerHTML += `, ${i}`;
        }
    }
}

// challenge 1132 from URI - beecrowd
function getRangeAndSumNumbers() {

    const a = parseInt(document.getElementById("number-a").value);

    const b = parseInt(document.getElementById("number-b").value);

    if (a < b) {

        calculateSum(a, b);

    } else if (a > b) {

        calculateSum(b, a);

    } else {
        const output = document.getElementById("display-sum");

        output.innerHTML = `Uh-oh! Insert two different numbers so we can get a range between them.`;
    }
    document.getElementById("number-a").value = "";

    document.getElementById("number-b").value = "";

    return true;
}

function calculateSum(min, max) {

    const output = document.getElementById("display-sum");

    let sum = 0;

    for (let i = min; i <= max; i++) {

        if (i % 13 !== 0) {

            sum += i;
        }
    }
    output.innerHTML = `The sum of all non-multiples of 13 from ${min} to ${max} is ${sum}.`;

    return sum;
}

// challenge 1133 from URI - beecrowd
function getRangeAndShowNumbers() {
    const x = parseInt(document.getElementById("number-x").value);

    const y = parseInt(document.getElementById("number-y").value);

    if (x < y) {

        generateNumbers(x, y);

    } else if (x > y) {

        generateNumbers(y, x);

    } else {
        const output = document.getElementById("display-numbers");
        output.innerHTML = `Uh-oh! Insert two different numbers so we can get a range between them.`;
    }
    document.getElementById("number-x").value = "";

    document.getElementById("number-y").value = "";
    
    return true;
}
function generateNumbers(min, max) {

    const output = document.getElementById("display-numbers");

    let numbers = [];

    for (let i = min; i < max; i++) {

        if (i % 5 === 2 || i % 5 === 3) {

            numbers.push(` ${i}`);
            numbers.push();
        }
    }
    output.innerHTML = numbers;

    return numbers;
}
function resetUri1133() {
    const x = document.getElementById("number-x");

    const y = document.getElementById("number-y");

    const output = document.getElementById("display-numbers")

    x.value = "";

    y.value = "";

    output.innerHTML = `(the numbers will show down here)`;
}

// challenge something something something
function testOne() {
    const input = document.getElementById("light-bulb");
    const button = document.getElementById("light-bulb-btn");
    
    input.setAttribute("placeholder", "Which switch are you turning now?");
    button.setAttribute("value", "Next");
    button.setAttribute("onclick", "goBack()");
    console.log(button);
}

function goBack() {
    const input = document.getElementById("light-bulb");
    const button = document.getElementById("light-bulb-btn");

    input.setAttribute("placeholder", "How many times will you switch?");
    button.setAttribute("value", "ok");
    button.setAttribute("onclick", "testOne()");
}