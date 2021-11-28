let totalPrice = 0;
let verifyContent = document.getElementById("verify-content");
let orderConfirmation = document.getElementById("order-confirmation");

//gets radio button inputs' value, attributes each price and returns final price 
function calculateTotalPrice() {

    const bread = document.querySelector("input[name='bread']:checked").value;
    const protein = document.querySelector('input[name="protein"]:checked').value;
    const cheese = document.querySelector('input[name="cheese"]:checked').value;
    const salad = document.querySelector('input[name="salad"]:checked').value;

    let breadPrice = 0;
    let proteinPrice = 0;
    let cheesePrice = 0;
    let saladPrice = 0;

    if (bread == "roll-bread" ) {
        breadPrice = 3;
    } else if ( bread == "australian") {
        breadPrice = 8;
    } else {
        breadPrice = 6;
    }
    
    if (protein == "picanha") {
        proteinPrice = 13;
    } else if (protein == "ribs") {
        proteinPrice = 10;
    } else {
        proteinPrice = 12;
    }

    if (cheese == "mozzarella") {
        cheesePrice = 3;
    } else if (cheese == "prato") {
        cheesePrice = 3;
    } else {
        cheesePrice = 5;
    }

    if (salad == "none") {
        saladPrice = 0;
    } else {
        saladPrice = 1.5;
    }

    totalPrice = (breadPrice + proteinPrice + cheesePrice + saladPrice).toFixed(2);
    return totalPrice;
}

//writes order to send to the kitchen
function makeOrderOutput() {

    const bread = document.querySelector("input[name='bread']:checked").value;
    const protein = document.querySelector('input[name="protein"]:checked').value;
    const cheese = document.querySelector('input[name="cheese"]:checked').value;
    const salad = document.querySelector('input[name="salad"]:checked').value;

    const breadOutput = document.getElementById("bread");
    const proteinOutput = document.getElementById("protein");
    const cheeseOutput = document.getElementById("cheese");
    const saladOutput = document.getElementById("salad");
    const totalPriceOutput = document.getElementById("final-price");

    if (bread == 'roll-bread' ) {
        breadOutput.innerHTML = "Pão francês";
    } else if ( bread == "australian") {
        breadOutput.innerHTML = "Pão australiano";
    } else if ( bread == "brioche") {
        breadOutput.innerHTML = "Pão de brioche";
    } else {
        reportError();
    }

    if (protein == "picanha") {
        proteinOutput.innerHTML = "Hambúrguer de picanha";
    } else if (protein == "ribs") {
        proteinOutput.innerHTML = "Hambúrguer de costela";
    } else if (protein == "plant") {
        proteinOutput.innerHTML = "Hambúrguer de planta";
    } else {
        reportError();
    }

    if (cheese == "mozzarella" ) {
        cheeseOutput.innerHTML = "Queijo mussarela";
    } else if ( cheese == "prato") {
        cheeseOutput.innerHTML = "Queijo prato";
    } else if (cheese == "cheddar") {
        cheeseOutput.innerHTML = "Queijo cheddar";
    } else {
        reportError();
    }

    if (salad == "none") {
        saladOutput.innerHTML = "Sem salada";
    } else if (salad == "tomato") {
        saladOutput.innerHTML = "Salada de tomate";
    } else if (salad == "lettuce"){
        saladOutput.innerHTML = "Salada de alface";
    } else {
        reportError();
    }

    calculateTotalPrice();

    totalPriceOutput.innerHTML = totalPrice;

    showVerificationContent()
}

//displays the hidden section with order confirmation so the client can approve
function showVerificationContent() {
    
    verifyContent.style.opacity = "1";
}

//displays the hidden section with order approval so the client knows it went fine
function showOrderConfirmation() {
    
    orderConfirmation.style.opacity = "1"
}

//resets radio button inputs and the page to the inicial status
function resetAllFields() {
    orderConfirmation.style.opacity = "0";
    verifyContent.style.opacity = "0";
}

//displays an error alert if input values cannot be read
function reportError() {
    alert("Algo deu errado! Tenta mais uma vez, não desiste da gente..");
}