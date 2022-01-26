const myMatrix = [
  ['Bissinho', 'Minuc', 'Piju'],
  ['Caroço', 'Xena', 'Max'],
  ['Tânia', 'Amaury'],
  ['Na linha 1 listei meus gatos', 'Na linha 2, meus dogs', 'Na linha 3 listei o nome dos meus pais', 'E na linha 4 expliquei pra você!'],
];

function showAllIn(obj) {
  const display = document.getElementById('display');

  for (let key in obj) {

    if (typeof obj[key] === "object") {

      display.innerHTML += `<strong><br>Linha ${parseInt(key) + 1}:</br></strong>`;

      showAllIn(obj[key]);

    } else {

      display.innerHTML += `<strong>${parseInt(key) + 1}º</strong> = ${obj[key]}</br>`;
    }
  }
}

showAllIn(myMatrix);