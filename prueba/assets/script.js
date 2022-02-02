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

function fillTableRow(list) {
    makeTableHeader();
    list.forEach((element, index) => {
        let nome = element.nome;
        let torre = element.torre;
        let apartamento = element.apartamento;
        let andar = element.andar;
        let id = `morador${index}`;
        
        element.id = id;
        element.presente = false;

        table.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>${torre}</td>
                <td>${apartamento}</td>
                <td>${andar}</td>
                <td><input type="button" value="presente" id="${id}" onclick="markAsPresent(this)"/></td>
            </tr>`;
    })

    if (list.length === 0) {
        return false;
    } else {
        return true;
    }
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

function markAsPresent(id) { 
    //comparar o id com todos da lista
    //se igual, marcar elemento.presente = true
}

function closeList() {
    //alterar pelo .setAttribute o atributo onclick de todos os botões para vazio, assim não seria mais possível marcar como presente
    //exibir uma nova tabela com apenas os presentes
    //poderia pegar uma função limpa tabela que já tenho para limpar a tabela exibida e então gerar uma nova reaproveitando a função usada acima fillTableRow()
}

fillTableRow(moradores);