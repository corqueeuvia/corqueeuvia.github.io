//ASPIRANTE: 
//caique calíope oliveira corcovia

//listar o moradores em uma tabela (array de obj) DONE
//um botão a cada morador DONE
//botão adiciona o morador como presente
//botão de fechamento da lista de presentes > exibe tabela com moradores presentes

//não vou conseguir cumprir 2/4 requisitos por falta de tempo, mas sei que consigo fazer. a dificuldade está em identificar qual dos métodos de array (se filter, map ou reduce) seria mais adequado..
//com mais 30 ou 40min eu acho que conseguiria finalizar :)

const moradores = [{
    nome: "João",
    torre: 1,
    apartamento: 01,
    andar: 0
},
{
    nome: "Lucas",
    torre: 1,
    apartamento: 02,
    andar: 0
},
{
    nome: "Victória",
    torre: 1,
    apartamento: 11,
    andar: 1
}, {
    nome: "Miguel",
    torre: 1,
    apartamento: 12,
    andar: 1
}, {
    nome: "Alípio",
    torre: 2,
    apartamento: 01,
    andar: 0
}, {
    nome: "Lorena",
    torre: 2,
    apartamento: 02,
    andar: 0
}, {
    nome: "Jairo",
    torre: 2,
    apartamento: 11,
    andar: 1
}, {
    nome: "Jerusa",
    torre: 2,
    apartamento: 12,
    andar: 1
}];

const table = document.getElementById('display-table');

const presentes = [];

function fillTableRow(list) {
    makeTableHeader();
    list.forEach((element, index) => {
        let nome = element.nome;
        let torre = element.torre;
        let apartamento = element.apartamento;
        let andar = element.andar;
        let id = `${index}`;

        element.id = id;
        element.presente = false;

        table.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${torre}</td>
                <td>${apartamento}</td>
                <td>${andar}</td>
                <td><input type="button" value="presença" id="${id}" onclick="markAsPresent(this)"/></td>
            </tr>`;
    })
}

function makeTableHeader() {
    table.innerHTML = `        
        <tr>
            <th>morador</th>
            <th>torre</th>
            <th>apartamento</th>
            <th>andar</th>
        </tr>`;
}

function markAsPresent(el) {
    const btn = document.getElementById(`${el.id}`);
    return moradores.map((element) => {
        if (element.id == el.id) {
            element.presente = !element.presente;
            if (element.presente === true) {
                btn.style.backgroundColor = 'lightgreen';
            } else {
                btn.style.backgroundColor = 'orangered';

            }
        }
    })
}

function closeList() {
    moradores.filter((el) => {
        if ((el.presente === true)) {
            presentes.push(el);
        };
    })
    return fillTableRow(presentes);
}

function newMeeting() {
    presentes.splice(0, presentes.length);
    moradores.map((element) => {
        element.presente = false;
    })
    return fillTableRow(moradores);
}