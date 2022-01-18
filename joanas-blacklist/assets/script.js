//variable declaration
const nameInput = document.getElementById("name-input");
const dateInput = document.getElementById("date-input");
const debtInput = document.getElementById("debt-input");
const table = document.getElementById("display-table");
const debtList = []; //array of objects to store data

function getNewInfo() { //gets info from inputs and stores in debtList array
    const newInfo = {};

    newInfo.name = nameInput.value;
    newInfo.date = dateInput.value;
    newInfo.debt = debtInput.value;
    debtList.push(newInfo);

    addInfoToTable();

    return true;
}

function addInfoToTable() { //displays clientList data onto the table and clear inputs afterwards
    table.innerHTML = `        
        <tr>
            <th>nome</th>
            <th>vencimento</th>
            <th>valor</th>
            <th>juros</th>
        </tr>`;
    debtList.forEach((value, index) => {
        table.innerHTML += `
            <tr>
                <td>${value.name}</td>
                <td>${value.date}</td>
                <td>${value.debt}</td>
                <td id="client-${index + 1}"></td>
            </tr>`;
    })

    clearInputs();

    return true;
}

function clearInputs() { //clears input fields
    nameInput.value = "";
    dateInput.value = "";
    debtInput.value = "";
}

function calculateInterest() { //calculates interest based on days of delay since due date
    const currentDate = new Date().getTime();

    debtList.map((client, index) => {
        let dueDate = new Date(client.date).getTime();
        let clientId = "client-" + (index + 1);
        const displayInterest = document.getElementById(clientId);

        let datesDiff = currentDate - dueDate;

        let days = (datesDiff / (1000 * 60 * 60 * 24)).toFixed(0);

        if (days <= 0) {
            displayInterest.innerHTML = "não aplicável";
        } else {
            let interest = 2 + days * 0.1;

            displayInterest.innerHTML = interest.toFixed(2) + "%";
        }
    })

}