// declaring fields to display data
const firstPlaceDisplay = document.getElementById("first");

const secondPlaceDisplay = document.getElementById("second");

const thirdPlaceDisplay = document.getElementById("third");

const pedroModel = document.getElementById("pedro-model");

const pedroSpeed = document.getElementById("pedro-speed");

const pedroDrift = document.getElementById("pedro-drift");

const jucaModel = document.getElementById("juca-model");

const jucaSpeed = document.getElementById("juca-speed");

const jucaDrift = document.getElementById("juca-drift");

const ednaModel = document.getElementById("edna-model");

const ednaSpeed = document.getElementById("edna-speed");

const ednaDrift = document.getElementById("edna-drift");

// declaring objects to store data 

let car0 = { score: 0, };

let car1 = { score: 0, };

let car2 = { score: 0, };

const rank = [car0, car1, car2];

const popularCar = {
    model: "Popular",
    minSpeed: [110, 130],
    maxSpeed: [180, 200],
    drift: [300, 400],
}

const sportCar = {
    model: "Sport",
    minSpeed: [125, 145],
    maxSpeed: [195, 215],
    drift: [200, 300],
}

const superSportCar = {
    model: "Super Sport",
    minSpeed: [140, 160],
    maxSpeed: [210, 230],
    drift: [100, 175],
}
//function declaration

//returns a random number in a range set as parameter
function getRandomBetween(min, max) {

    const minv = Math.ceil(min);

    const maxv = Math.floor(max);

    return Math.floor(Math.random() * (maxv - minv + 1)) + minv;
}
//sets a car model according to the odds to the object given as a parameter
function getModel() {

    let num = Math.random() * 100;

    let model;

    if (num <= 60) {

        model = "Popular";

    } else if (num <= 95) {

        model = "Sport";

    } else {

        model = "Super Sport";
    }
    return model;
}

//sets a car min and max speed and its drift according to the car model and displays it in html
function getSpeedParameters(car) {

    let max;

    let min;

    let drift;

    if (car.model === "Popular") {

        max = getRandomBetween(popularCar.maxSpeed[0], popularCar.maxSpeed[1]);

        min = getRandomBetween(popularCar.minSpeed[0], popularCar.minSpeed[1]);

        drift = getRandomBetween(popularCar.drift[0], popularCar.drift[1]);

    } else if (car.model === "Sport") {

        max = getRandomBetween(sportCar.maxSpeed[0], sportCar.maxSpeed[1]);

        min = getRandomBetween(sportCar.minSpeed[0], sportCar.minSpeed[1]);

        drift = getRandomBetween(sportCar.drift[0], sportCar.drift[1]);

    } else {

        max = getRandomBetween(superSportCar.maxSpeed[0], superSportCar.maxSpeed[1]);

        min = getRandomBetween(superSportCar.minSpeed[0], superSportCar.minSpeed[1]);

        drift = getRandomBetween(superSportCar.drift[0], superSportCar.drift[1]);
    }
    car.minSpeed = min;

    car.maxSpeed = max;

    car.drift = drift / 10000;

    return true;
}
//sets a new speed according to the car range speed
function getCarSpeed(car) {

    car.speed = getRandomBetween(car.minSpeed, car.maxSpeed) * (1 - car.drift);
}

function assignPlayersCars(car, owner) {

    car.owner = owner;

    car.model = getModel();

    getSpeedParameters(car);
}

function assembleCars() {

    resetDisplay();

    assignPlayersCars(car0, "Pedro");

    assignPlayersCars(car1, "Juca");

    assignPlayersCars(car2, "Edna");

    pedroModel.innerHTML += ` ${car0.model}`;

    pedroSpeed.innerHTML += ` ${car0.minSpeed} ~ ${car0.maxSpeed} Km/h`;

    pedroDrift.innerHTML += ` ${(car0.drift * 100).toFixed(3)}%`;

    jucaModel.innerHTML += ` ${car1.model}`;

    jucaSpeed.innerHTML += ` ${car1.minSpeed} ~ ${car1.maxSpeed} Km/h`;

    jucaDrift.innerHTML += ` ${(car1.drift * 100).toFixed(3)}%`;

    ednaModel.innerHTML += ` ${car2.model}`;

    ednaSpeed.innerHTML += ` ${car2.minSpeed} ~ ${car2.maxSpeed} Km/h`;

    ednaDrift.innerHTML += ` ${(car2.drift * 100).toFixed(3)}%`;
}
//retuns an array for the lap classification and scores 1 to the 1st place contestant
function getRankBySpeed() {

    let hold = 0;

    for (let i = 0; i < rank.length; i++) {

        for (let j = 0; j < rank.length; j++) {

            if (rank[i].speed > rank[j].speed) {

                hold = rank[i];

                rank[i] = rank[j];

                rank[j] = hold;
            }
        }
    }
    rank[0].score++;

    return rank;
}
//order players in rank by their score
function getRankByScore() {

    let hold = 0;

    for (let i = 0; i < rank.length; i++) {

        for (let j = 0; j < rank.length; j++) {

            if (rank[i].score > rank[j].score) {

                hold = rank[i];

                rank[i] = rank[j];

                rank[j] = hold;
            }
        }
    }
    return rank;
}

function playRace(laps) {

    console.log(car0, car1, car2);

    resetScore();

    for (let i = 0; i < laps; i++) {

        for (let j = 0; j < rank.length; j++) {

            getCarSpeed(rank[j]);
        }
        getRankBySpeed();
    }
    getRankByScore();

    displayRank();
}

function displayRank() {

    firstPlaceDisplay.value = `${rank[0].owner} (${rank[0].score} laps)`;

    secondPlaceDisplay.value = `${rank[1].owner} (${rank[1].score} laps)`;

    thirdPlaceDisplay.value = `${rank[2].owner} (${rank[2].score} laps)`;

    return true;
}

function resetScore() {
    
    for (let i = 0; i < rank.length; i++) {

        rank[i].score = 0;
    }
}

function resetDisplay() {
    firstPlaceDisplay.value = "";

    secondPlaceDisplay.value = "";

    thirdPlaceDisplay.value = "";

    pedroModel.innerHTML = "<strong>Model:</strong>" ;

    pedroSpeed.innerHTML = "<strong>Speed:</strong>" ;

    pedroDrift.innerHTML = "<strong>Drift:</strong>" ;

    jucaModel.innerHTML = "<strong>Model:</strong>" ;

    jucaSpeed.innerHTML = "<strong>Speed:</strong>" ;

    jucaDrift.innerHTML = "<strong>Drift:</strong>" ;

    ednaModel.innerHTML = "<strong>Model:</strong>" ;

    ednaSpeed.innerHTML = "<strong>Speed:</strong>" ;

    ednaDrift.innerHTML = "<strong>Drift:</strong>";
    
    resetScore();

    return true;
}