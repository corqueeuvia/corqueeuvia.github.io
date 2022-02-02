//variable declaration
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const debtInput = document.getElementById('debt-input');
const table = document.getElementById('display-table');
const debtList = [
    { name: 'abgail', date: '2021-08-09', debt: '120' },
    { name: 'christian', date: '2021-11-09', debt: '120' },
    { name: 'beto', date: '2021-12-09', debt: '120' },
    { name: 'diego', date: '2022-01-26', debt: '350' },
    { name: 'edgar', date: '2022-02-21', debt: '780' },
    { name: 'felix', date: '2022-02-03', debt: '800' },
    { name: 'gertrudes', date: '2022-03-31', debt: '275' },
    { name: 'hamilton', date: '2022-02-07', debt: '178' },
    { name: 'irene', date: '2022-02-22', debt: '222' },
    { name: 'joelma', date: '2021-10-05', debt: '189' },
    { name: 'kevin', date: '2022-02-15', debt: '156' },
    { name: 'leonas', date: '2022-02-21', debt: '570' },
    { name: 'minerva', date: '2021-10-11', debt: '320' },
    { name: 'neide', date: '2021-07-13', debt: '430' },
    { name: 'onofre', date: '2021-05-11', debt: '570' },
    { name: 'plínio', date: '2021-11-15', debt: '420' },
    { name: 'quésia', date: '2021-04-20', debt: '660' },
    { name: 'rihana', date: '2022-01-24', debt: '735' },
    { name: 'samir', date: '2021-12-01', debt: '1000' },
    { name: 'talia', date: '2021-12-14', debt: '1500' },
    { name: 'ulisses', date: '2021-09-21', debt: '460' },
    { name: 'valmir', date: '2021-08-16', debt: '230' },
    { name: 'xuxu', date: '2021-11-18', debt: '200' },
    { name: 'yara', date: '2022-01-31', debt: '330' },
    { name: 'wilson', date: '2021-12-20', debt: '300' },
    { name: 'zendaya', date: '2022-02-14', debt: '2560' },
    { name: 'abgail', date: '2021-12-20', debt: '200' },
    { name: 'christian', date: '2022-01-10', debt: '300' },
    { name: 'beto', date: '2021-11-18', debt: '500' },
    { name: 'abgail', date: '2021-11-08', debt: '100' },
    { name: 'zendaya', date: '2021-11-08', debt: '150' },
    { name: 'leonas', date: '2021-11-22', debt: '330' },
    { name: 'onofre', date: '2021-07-12', debt: '600' },
    { name: 'gertrudes', date: '2021-05-13', debt: '700' },
]; //array of objects to store data
const clientNameList = ['abgail', 'christian', 'beto', 'diego', 'edgar', 'felix', 'gertrudes', 'hamilton', 'irene', 'joelma', 'kevin', 'leonas', 'minerva', 'neide', 'onofre', 'plínio', 'quésia', 'rihana', 'samir', 'talia', 'ulisses', 'valmir', 'xuxu', 'yara', 'wilson', 'zendaya'];
const clientDateList = ['2021-08-09', '2021-11-09', '2021-12-09', '2022-01-26', '2022-02-21', '2022-02-03', '2022-03-31', '2022-02-07', '2022-02-22', '2021-10-05', '2022-02-15', '2021-10-11', '2021-07-13', '2021-05-11', '2021-11-15', '2021-04-20', '2022-01-24', '2021-12-01', '2021-12-14', '2021-09-21', '2021-08-16', '2021-11-18', '2022-01-31', '2021-12-20', '2022-02-14', '2022-01-10', '2021-11-08', '2021-11-22', '2021-07-12', '2021-05-13'];

addInfoToTable();

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