function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days".
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day.
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday.
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let x = 0; x < dezDaysList.length; x += 1) {
    let currentDay = dezDaysList[x];
    let daysListItem = document.createElement('li');
    daysListItem.innerHTML = currentDay;
    daysListItem.className = 'day';
    daysList.appendChild(daysListItem);

    if (daysListItem.innerText == '24' || daysListItem.innerText == '25' || daysListItem.innerText == '31') {
      daysListItem.classList.add('holiday');
    } else if (daysListItem.innerText == '4' || daysListItem.innerText == '11' || daysListItem.innerText == '18' || daysListItem.innerText == '25') {
      daysListItem.classList.add('friday');
    }
  }
}
createDays();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function holidaysButton (buttonName) {
  const divButton = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = buttonName;
  divButton.appendChild(button);
}
holidaysButton('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const buttonHoliday = document.querySelector('#btn-holiday');

function selectHoliday () {
  const holidayDays = document.querySelectorAll('.holiday');
  for (let x = 0; x < holidayDays.length; x += 1) {
    let currentItem = holidayDays[x];
    if (currentItem.style.backgroundColor != 'rgb(238, 238, 238)') {
      currentItem.style.backgroundColor = 'rgb(238, 238, 238)';
    } else if (currentItem.style.backgroundColor == 'rgb(238, 238, 238)') {
      currentItem.style.backgroundColor = 'rgb(199, 199, 199)';
    }
  }
}
buttonHoliday.addEventListener('click', selectHoliday);

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function fridayButton (buttonName) {
  const divButton = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = buttonName;
  divButton.appendChild(button);
}
fridayButton('Sexta-feira');

// Exercício 5

// Exercício 6

// Exercício 7

// Exercício 8

// Exercício 9

// Exercício 10

