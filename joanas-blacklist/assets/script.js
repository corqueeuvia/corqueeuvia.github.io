//variable declaration
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const debtInput = document.getElementById('debt-input');
const table = document.getElementById('display-table');
const debtList = []; //array of objects to store data
const clientNameList = [];
const clientDateList = [];

function getNewInfo() { //gets info from inputs and stores in debtList array
    const newInfo = {};

    newInfo.name = nameInput.value;
    newInfo.date = dateInput.value;
    newInfo.debt = debtInput.value;
    debtList.push(newInfo);

    createClientNameList(nameInput.value); //to store a list of unique client names
    createClientDateList(dateInput.value); //to store a list of unique dates

    addInfoToTable();

    return true;
}

function createClientNameList(newName) {
    let duplicate = false;

    for (let i = 0; i < clientNameList.length; i++) {

        if (newName === clientNameList[i]) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        clientNameList.push(newName);
    }

    return clientNameList;
}

function createClientDateList(newDate) {
    let duplicate = false;

    for (let i = 0; i < clientDateList.length; i++) {

        if (newDate === clientDateList[i]) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        clientDateList.push(newDate);
    }

    return clientDateList;
}

function addInfoToTable() { //displays clientList data onto the table and clear inputs afterwards
    clearTable();

    fillTableRow(debtList); //fill table rows from debtList

    clearInputs();

    return true;
}

function fillTableRow(list) {
    list.forEach((element, index) => {
        let name = element.name;
        let date = element.date;
        let debt = element.debt;
        let interest = element.interest;

        if (interest === undefined) {
            interest = '';
        }

        table.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${date}</td>
            <td>${debt}</td>
            <td id='client-${index + 1}'>${interest}</td>
        </tr>`;
    })
}

function clearInputs() { //clears input fields
    nameInput.value = '';
    dateInput.value = '';
    debtInput.value = '';
}

function calculateInterest() { //calculates interest based on days of delay since due date
    const currentDate = new Date().getTime();

    debtList.map((client, index) => {
        let dueDate = new Date(client.date).getTime();
        let clientId = 'client-' + (index + 1);
        const displayInterest = document.getElementById(clientId);

        let datesDiff = currentDate - dueDate;

        let days = (datesDiff / (1000 * 60 * 60 * 24)).toFixed(0);

        if (days <= 0) {
            displayInterest.innerHTML = 'não aplicável';
            client.interest = 0;
        } else {
            let interest = 2 + days * 0.1;

            displayInterest.innerHTML = interest.toFixed(2) + '%';
            client.interest = interest.toFixed(2) + '%';
        }
    })
}

function groupListBy(list, criterion) { //organizes a list by a criterion eg.: organize debtList by name
    return list.reduce((acc, obj) => {
        let key = obj[criterion];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

function showDebtByName() {
    const byName = groupListBy(debtList, 'name');

    clearTable();

    clientNameList.forEach((el) => { //for each unique client name on the list it will...
        fillTableRow(byName[el]); //fill a table row from the object array byName
    }); //so all the info is displayed by client name and not by the order user added it

    return byName;
}

//must figure out a way to convert date to letters so it can be used as a key when sorting
function showDebtByDate() {
    const byDate = groupListBy(debtList, 'date');

    clearTable();

    clientDateList.forEach((el) => { //for each unique date on the list it will...
        fillTableRow(byDate[el]); //fill a table row from the object array byDate
    }); //so all the info is displayed by due date and not by the order user added it

    return byDate;
}

function clearTable() {
    table.innerHTML = `        
        <tr>
            <th>nome</th>
            <th>vencimento</th>
            <th>valor</th>
            <th>juros</th>
        </tr>`;
}