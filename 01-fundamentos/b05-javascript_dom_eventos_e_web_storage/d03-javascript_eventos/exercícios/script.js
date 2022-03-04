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

// Exercício 1

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

// Exercício 2

// Exercício 3

// Exercício 4

// Exercício 5

// Exercício 6

// Exercício 7

// Exercício 8

// Exercício 9

// Exercício 10

