//challenge 1009
function calculateIncome() {
    let name = document.getElementById('employees-name').value;
    let salary = parseFloat(document.getElementById('fixed-salary').value);
    let percentual = parseFloat(document.getElementById('percentual-bonus').value) / 100;
    let bonus = parseFloat(document.getElementById('month-sale').value) * percentual;
    let income = salary + bonus;
    let output = document.getElementById('total-income');
    output.value = name + ", your income is $" + income.toFixed(2) + " this month.";
    clearSalaryInput();
}
function clearSalaryInput() {
    let name = document.getElementById('employees-name');
    name.value = null;
    let salary = document.getElementById('fixed-salary');
    salary.value = null;
    let percentual = document.getElementById('percentual-bonus');
    percentual.value = null;
    let sale = document.getElementById('month-sale');
    sale.value = null;
}
//challenge 1010
function calculateTotalPrice() {
    let amountOne = parseInt(document.getElementById("product-1-amount").value);
    let priceOne = parseFloat(document.getElementById("product-1-price").value) * amountOne;
    let amountTwo = parseInt(document.getElementById("product-2-amount").value);
    let priceTwo = parseFloat(document.getElementById("product-2-price").value) * amountTwo;
    let totalPrice = priceOne + priceTwo;
    let output = document.getElementById("total-price");
    output.value = "You must pay $" + totalPrice.toFixed(2) + " for the items.";
    clearProductsInput();
}
function clearProductsInput() {
    let c1 = document.getElementById("product-1-code");
    c1.value = null;
    let a1 = document.getElementById("product-1-amount");
    a1.value = null;
    let p1 = document.getElementById("product-1-price");
    p1.value = null;
    let c2 = document.getElementById("product-2-code");
    c2.value = null;
    let a2 = document.getElementById("product-2-amount");
    a2.value = null;
    let p2 = document.getElementById("product-2-price");
    p2.value = null;
}
//chalenge 1011
function calculateSphereVolume() {
    let sphereRadius = parseFloat(document.getElementById("sphere-radius").value);
    let pi = 3.14159;
    let sphereVolume = 4.0 / 3 * pi * Math.pow(sphereRadius, 3);
    let output = document.getElementById("sphere-volume");
    output.value = "The volume of a sphere of radius " + sphereRadius + " is " + sphereVolume.toFixed(3);
    clearInput();
}
function clearInput() {
    let input = document.getElementById("sphere-radius");
    input.value = null;
}
//cheallenge 1012
function calculateAllAreas() {
    let A = parseFloat(document.getElementById("input-a").value);
    let B = parseFloat(document.getElementById("input-b").value);
    let C = parseFloat(document.getElementById("input-c").value);
    let pi = 3.14159;
    let rectTriArea = (A * C) / 2;
    let rectTriOutput = document.getElementById("rect-tri-output");
    rectTriOutput.value = "The base " + A + " height " + C + " rectangled triangle's area is " + rectTriArea.toFixed(3);
    let circleArea = pi * Math.pow(C, 2)
    let circleOutput = document.getElementById("circle-output");
    circleOutput.value = "The radius " + C + " circle's area is " + circleArea.toFixed(3);
    let trapeziumArea = (A + B) * C / 2;
    let trapeziumOutput = document.getElementById("trapezium-output");
    trapeziumOutput.value = "The bases " + A + " and " + B + " and height " + C + " trapezium's area is " + trapeziumArea.toFixed(3);
    let squareArea = B * B;
    let squareOutput = document.getElementById("square-output");
    squareOutput.value = "The side " + B + " square's area is " + squareArea.toFixed(3);
    let rectangleArea = A * B;
    let rectangleOutput = document.getElementById("rectangle-output");
    rectangleOutput.value = "The sides " + A + " and " + B + " rectangle's area is " + rectangleArea.toFixed(3);
    clearAbcInput();
}
function clearAbcInput() {
    let fA = document.getElementById("input-a");
    fA.value = null;
    let fB = document.getElementById("input-b");
    fB.value = null;
    let fC = document.getElementById("input-c");
    fC.value = null;
}
//challenge 1013
function showGreatest() {
    let a = parseInt(document.getElementById("input-1").value);
    let b = parseInt(document.getElementById("input-2").value);
    let c = parseInt(document.getElementById("input-3").value);
    let greatestAB = (a + b + Math.abs(a - b)) / 2;
    let greatestXC = (greatestAB + c + Math.abs(greatestAB - c)) / 2;
    let greatestOutput = document.getElementById("greatestOutput");
    greatestOutput.value = greatestXC;
    clearGreatInput();
}
function clearGreatInput() {
    let ga = document.getElementById("input-1");
    ga.value = null;
    let gb = document.getElementById("input-2");
    gb.value = null;
    let gc = document.getElementById("input-3");
    gc.value = null;
}
//challenge 1014
function giveCarConsumption() {
    let distance = parseInt(document.getElementById("km-input").value);
    let liters = parseFloat(document.getElementById("l-input").value);
    let consumption = distance / liters.toFixed(1);
    let output = document.getElementById("consumption-output");
    output.value = "The car runs and average of " + consumption.toFixed(3) + "Km/L."
    clearConsumptionInput();
}
function clearConsumptionInput() {
    let iKm = document.getElementById("km-input");
    iKm.value = null;
    let iL = document.getElementById("l-input");
    iL.value = null;
}
//challenge 1015
function calculateDistance() {
    let x1 = (parseFloat(document.getElementById("x1-input").value)).toFixed(1);
    let y1 = (parseFloat(document.getElementById("y1-input").value)).toFixed(1);
    let x2 = (parseFloat(document.getElementById("x2-input").value)).toFixed(1);
    let y2 = (parseFloat(document.getElementById("y2-input").value)).toFixed(1);
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distOutput = document.getElementById("distance-output");
    distOutput.value = "The distance between these two points is " + distance.toFixed(4);
    clearDistanceInput();
}
function clearDistanceInput() {
    let ix1 = document.getElementById("x1-input");
    ix1.value = null;
    let iy1 = document.getElementById("y1-input");
    iy1.value = null;
    let ix2 = document.getElementById("x2-input");
    ix2.value = null;
    let iy2 = document.getElementById("y2-input");
    iy2.value = null;
}
//challenge 1016
function calculateTime() {
    let distance = parseInt(document.getElementById("cars-dist-input").value);
    let time = distance * 2;
    let output = document.getElementById("cars-dist-output");
    output.value = "It will take the Beetle " + time + " minutes to be " + distance + "Km ahead.";
    clearCarDistInput();
}
function clearCarDistInput() {
    let input = document.getElementById("cars-dist-input");
    input.value = null;
}
//challenge 1017
function calculateFuelSpent() {
    let tripDuration = parseInt(document.getElementById("trip-duration").value);
    let averageSpeed = parseFloat(document.getElementById("average-speed").value);
    let tripDistance = averageSpeed * tripDuration;

    let fuelSpent = tripDistance / 12;
    let fuelOutput = document.getElementById("fuelSpent");
    fuelOutput.value = "This trip spent " + fuelSpent.toFixed(3) + "L";

    clearTripInput();
}
function clearTripInput() {
    let duration = document.getElementById("trip-duration");
    duration.value = null;
    let speed = document.getElementById("average-speed");
    speed.value = null;
}
//challenge 1018
function calculateNoteAmt() {
    let amountWanted = parseInt(document.getElementById("amount-wanted").value);
    let note100 = parseInt(amountWanted / 100);
    let remainder = amountWanted % 100;
    if (note100 == 0) {
        let amt100 = document.getElementById("output-100");
        amt100.value = "No 100$ bill";
    } else {
        let amt100 = document.getElementById("output-100");
        amt100.value = note100 + "x the 100$ bill";
    }
    let note50 = parseInt(remainder / 50);
    remainder = remainder % 50;
    if (note50 == 0) {
        let amt50 = document.getElementById("output-50");
        amt50.value = "No 50$ bill";
    } else {
        let amt50 = document.getElementById("output-50");
        amt50.value = note50 + "x the 50$ bill";
    }
    let note20 = parseInt(remainder / 20);
    remainder = remainder % 20;
    let amt20 = document.getElementById("output-20");
    if (note20 == 0) {
        amt20.value = "No 20$ bill";
    } else {
        amt20.value = note20 + "x the 20$ bill";

    }
    let note10 = parseInt(remainder / 10);
    remainder = remainder % 10;
    let amt10 = document.getElementById("output-10");
    if (note10 == 0) {
        amt10.value = "No 10$ bill";
    } else {
        amt10.value = note10 + "x the 10$ bill";
    }
    let note5 = parseInt(remainder / 5);
    remainder = remainder % 5;
    let amt5 = document.getElementById("output-5");
    if (note5 == 0) {
        amt5.value = "No 5$ bill";
    } else {
        amt5.value = note5 + "x the 5$ bill";
    }
    let note2 = parseInt(remainder / 2);
    remainder = remainder % 2;
    let amt2 = document.getElementById("output-2");
    if (note2 == 0) {
        amt2.value = "No 2$ bill";
    } else {
        amt2.value = note2 + "x the 2$ bill";
    }
    let note1 = parseInt(remainder / 1);
    let amt1 = document.getElementById("output-1");
    if (note1 == 0) {
        amt1.value = "No 1$ bill";
    } else {
        amt1.value = note1 + "x the 1$ bill";
    }
    clearAmountWanted()
}
function clearAmountWanted() {
    let input = document.getElementById("amount-wanted");
    input.value = null;
}
function clearNotesResult() {
    let amt1 = document.getElementById("output-1");
    amt1.value = null;
    let amt2 = document.getElementById("output-2");
    amt2.value = null;
    let amt5 = document.getElementById("output-5");
    amt5.value = null;
    let amt10 = document.getElementById("output-10");
    amt10.value = null;
    let amt20 = document.getElementById("output-20");
    amt20.value = null;
    let amt50 = document.getElementById("output-50");
    amt50.value = null;
    let amt100 = document.getElementById("output-100");
    amt100.value = null;
}
//challenge 1019
function convertTime() {
    let bigSeconds = parseInt(document.getElementById("seconds-input").value);
    let finalSec = bigSeconds % 60;
    let minute = parseInt(bigSeconds / 60);
    if (minute > 60) {
        let finalHour = parseInt(minute / 60);
        let finalMinute = minute % 60;
        let finalTime = document.getElementById("final-time");
        finalTime.value = finalHour + ":" + finalMinute + ":" + finalSec;
    } else {
        let finalTime = document.getElementById("final-time");
        finalTime.value = 0 + ":" + minute + ":" + finalSec;
    }
}
//challenge 1020
function convertDays() {
    let bigDays = parseInt(document.getElementById("day-amt-input").value);
    let finalYear = parseInt(bigDays / 365);
    let days = bigDays % 365;
    if (days >= 30) {
        finalDays = days % 30;
        finalMonths = parseInt(days / 30);
        let finalDate = document.getElementById("day-amt-output");
        finalDate.value = bigDays + " days = " + finalYear + " year(s), " + finalMonths + " month(s) " + finalDays + " day(s).";
    } else {
        let finalDate = document.getElementById("day-amt-output");
        finalDate.value = bigDays + " days = " + finalYear + " year(s), " + 0 + " month(s) " + days + " day(s).";
    }
}
//challenge 1021
function calculateBillCoinAmt() {
    let totalSum = parseFloat(document.getElementById("bill-coin-amt").value);
    let note100 = parseInt(totalSum / 100);
    let remainder = totalSum % 100;
    if (note100 == 0) {
        let amt100 = document.getElementById("out-100");
        amt100.value = "No 100$ bill";
    } else {
        let amt100 = document.getElementById("out-100");
        amt100.value = note100 + "x the 100$ bill";
    }
    let note50 = parseInt(remainder / 50);
    remainder = remainder % 50;
    if (note50 == 0) {
        let amt50 = document.getElementById("out-50");
        amt50.value = "No 50$ bill";
    } else {
        let amt50 = document.getElementById("out-50");
        amt50.value = note50 + "x the 50$ bill";
    }
    let note20 = parseInt(remainder / 20);
    remainder = remainder % 20;
    let amt20 = document.getElementById("out-20");
    if (note20 == 0) {
        amt20.value = "No 20$ bill";
    } else {
        amt20.value = note20 + "x the 20$ bill";
    }
    let note10 = parseInt(remainder / 10);
    remainder = remainder % 10;
    let amt10 = document.getElementById("out-10");
    if (note10 == 0) {
        amt10.value = "No 10$ bill";
    } else {
        amt10.value = note10 + "x the 10$ bill";
    }
    let note5 = parseInt(remainder / 5);
    remainder = remainder % 5;
    let amt5 = document.getElementById("out-5");
    if (note5 == 0) {
        amt5.value = "No 5$ bill";
    } else {
        amt5.value = note5 + "x the 5$ bill";
    }
    let note2 = parseInt(remainder / 2);
    remainder = remainder % 2;
    let amt2 = document.getElementById("out-2");
    if (note2 == 0) {
        amt2.value = "No 2$ bill";
    } else {
        amt2.value = note2 + "x the 2$ bill";
    }
    //coins ~~~~~~~~~~~~~~~~~~~~~~~~~~
    let coin1 = remainder / 1;
    remainder = parseFloat(remainder % 1);
    let amt1 = document.getElementById("out-1");
    if (parseInt(coin1) == 0) {
        amt1.value = "No 1$ coin";
    } else {
        amt1.value = parseInt(coin1) + "x the 1$ coin";
    }
    let coin50 = remainder / 0.5;
    remainder = parseFloat(remainder % 0.5);
    let amt050 = document.getElementById("out-050");
    if (parseInt(coin50) == 0) {
        amt050.value = "No $0.50 coin";
    } else {
        amt050.value = parseInt(coin50) + "x the $0.50 coin";
    }
    let coin25 = remainder / 0.25;
    remainder = parseFloat(remainder % 0.25);
    let amt025 = document.getElementById("out-025");
    if (parseInt(coin25) == 0) {
        amt025.value = "No $0.25 coin";
    } else {
        amt025.value = parseInt(coin25) + "x the $0.25 coin";
    }
    let coin10 = remainder / 0.1;
    remainder = parseFloat(remainder % 0.1);
    let amt010 = document.getElementById("out-010");
    if (parseInt(coin10) == 0) {
        amt010.value = "No $0.10 coin";
    } else {
        amt010.value = parseInt(coin10) + "x the $0.10 coin";
    }
    let coin5 = remainder / 0.05;
    remainder = parseFloat(remainder % 0.05);
    let amt05 = document.getElementById("out-05");
    if (parseInt(coin5) == 0) {
        amt05.value = "No $0.05 coin";
    } else {
        amt05.value = parseInt(coin5) + "x the $0.05 coin";
    }
    let coin01 = remainder / 0.01;
    remainder = parseFloat(remainder % 0.01);
    let amt01 = document.getElementById("out-01");
    if (parseInt(coin01) == 0) {
        amt01.value = "No $0.01 coin";
    } else {
        amt01.value = parseInt(coin01) + "x the $0.01 coin. Would you take it in candy? (:";
    }
    clearTotalSum();
}
function clearTotalSum() {
    let input = document.getElementById("bill-coin-amt");
    input.value = null;
}
function clearBillCoinResult() {
    let amt1 = document.getElementById("out-1");
    amt1.value = null;
    let amt2 = document.getElementById("out-2");
    amt2.value = null;
    let amt5 = document.getElementById("out-5");
    amt5.value = null;
    let amt10 = document.getElementById("out-10");
    amt10.value = null;
    let amt20 = document.getElementById("out-20");
    amt20.value = null;
    let amt50 = document.getElementById("out-50");
    amt50.value = null;
    let amt100 = document.getElementById("out-100");
    amt100.value = null;
    let amt01 = document.getElementById("out-01");
    amt01.value = null;
    let amt05 = document.getElementById("out-05");
    amt05.value = null;
    let amt010 = document.getElementById("out-010");
    amt010.value = null;
    let amt025 = document.getElementById("out-025");
    amt025.value = null;
    let amt050 = document.getElementById("out-050");
    amt050.value = null;
}
// challenge 10XX
function showMonth() {
    let monthNum = parseInt(document.getElementById("number").value);
    let monthRes = document.getElementById("month-result");
    if (monthNum == 1) {
        monthRes.value = "Month #" + monthNum + " is January";
    } else if (monthNum == 2) {
        monthRes.value = "Month #" + monthNum + " is February";
    } else if (monthNum == 3) {
        monthRes.value = "Month #" + monthNum + " is March";
    } else if (monthNum == 4) {
        monthRes.value = "Month #" + monthNum + " is April";
    } else if (monthNum == 5) {
        monthRes.value = "Month #" + monthNum + " is May";
    } else if (monthNum == 6) {
        monthRes.value = "Month #" + monthNum + " is June";
    } else if (monthNum == 7) {
        monthRes.value = "Month #" + monthNum + " is July";
    } else if (monthNum == 8) {
        monthRes.value = "Month #" + monthNum + " is August";
    } else if (monthNum == 9) {
        monthRes.value = "Month #" + monthNum + " is September";
    } else if (monthNum == 10) {
        monthRes.value = "Month #" + monthNum + " is October";
    } else if (monthNum == 11) {
        monthRes.value = "Month #" + monthNum + " is November";
    } else if (monthNum == 12) {
        monthRes.value = "Month #" + monthNum + " is December";
    } else {
        monthRes.value = "Hey! We have 12 months, pick a number from 1 to 12."
    }
}
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
    const input = document.getElementById("complaints")
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
// challenge 52 from neps academy
function turnSwitches() {
    const data = document.getElementById("light-bulb").value.split(",");  
    const display = document.getElementById("light-bulb-display");
    const switchTimes = parseInt(data[0]);
    let bulb_a = false;
    let bulb_b = false;
    
    for (let i = 1; i <= switchTimes; i++) {
        let el = parseInt(data[i]);
        if (switchTimes !== data.length - 1) {
            display.innerHTML = `ERR: Must switch ${switchTimes} times.`;
            break;
        } else if (el === 1) {
            bulb_a = !bulb_a;
            showBulbs(bulb_a, bulb_b);
        } else if (el === 2) {
            bulb_a = !bulb_a;
            bulb_b = !bulb_b;
            showBulbs(bulb_a, bulb_b);
        } else {
            display.innerHTML = `ERR: Can't type a number different from 1 or 2 after the first one.`;
            break;
        }
    }
}

function showBulbs(bulb_a, bulb_b) {
    const display = document.getElementById("light-bulb-display");
    if (bulb_a === false && bulb_b === false) {
        display.innerHTML = `<i class='bx bxs-bulb' style="color:rgba(255, 255, 0, 0.5)"></i>`;
        display.innerHTML += `<i class='bx bxs-bulb' style="color:rgba(255, 255, 0, 0.5)"></i>`;
    } else if (bulb_a === false && bulb_b === true) {
        display.innerHTML = `<i class='bx bxs-bulb' style="color:rgba(255, 255, 0, 0.5)"></i>`;
        display.innerHTML += `<i class='bx bxs-bulb' style="color:yellow; text-shadow: 0px -2px 10px yellow"></i>`;
    } else if (bulb_a === true && bulb_b === false) {
        display.innerHTML = `<i class='bx bxs-bulb' style="color:yellow; text-shadow: 0px -2px 10px yellow"></i>`;
        display.innerHTML += `<i class='bx bxs-bulb' style="color:rgba(255, 255, 0, 0.5)"></i>`;
    } else if (bulb_a === true && bulb_b === true) {
        display.innerHTML = `<i class='bx bxs-bulb' style="color:yellow; text-shadow: 0px -2px 10px yellow"></i>`;
        display.innerHTML += `<i class='bx bxs-bulb' style="color:yellow; text-shadow: 0px -2px 10px yellow"></i>`;
    }
}