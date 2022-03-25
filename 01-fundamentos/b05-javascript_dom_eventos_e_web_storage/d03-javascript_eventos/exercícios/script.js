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

    if (daysListItem.innerText == '24' || daysListItem.innerText == '31') {
      daysListItem.classList.add('holiday');
    } else if (daysListItem.innerText == '4' || daysListItem.innerText == '11' || daysListItem.innerText == '18') {
      daysListItem.classList.add('friday');
    } else if (daysListItem.innerText == '25') {
      daysListItem.classList.add('holiday', 'friday');
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

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const buttonFriday = document.querySelector('#btn-friday');

function selectFriday () {
  const fridayDays = document.querySelectorAll('.friday');
  let fridayArray = [4, 11, 18, 25];
  for (let x = 0; x < fridayDays.length; x += 1) {
    if (fridayDays[x].innerText != 'SEXTOU!') {
      fridayDays[x].innerText = 'SEXTOU!';
    } else {
      fridayDays[x].innerText = fridayArray[x];
    }
  }
}
buttonFriday.addEventListener('click', selectFriday)

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomInDay () {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', function(e) {
    e.target.style.fontSize = '40px';
  })
}
zoomInDay();

function zoomOutDay () {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function(e) {
    e.target.style.fontSize = '20px';
  })
}
zoomOutDay();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const input = document.querySelector('#task-input')

function addTask () {
  const taskElement = document.createElement('span');
  const divTask = document.querySelector('.my-tasks');
  taskElement.innerHTML = input.value + '<br>';
  divTask.appendChild(taskElement);
}

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function backColor () {
  const divTask = document.createElement('div');
  const divMom = document.querySelector('.my-tasks');
  divTask.className = 'task';
  divTask.style.backgroundColor = 'white';
  divMom.appendChild(divTask);
}
input.addEventListener('change', backColor);
input.addEventListener('change', addTask);

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addEvent () {
  const task = document.querySelector('.task');
  const selectTask = document.getElementsByClassName('task selected');
  task.addEventListener('click', function(event) {
    if (selectTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
addEvent();

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
// (retirado do gabarito)

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();

// Bônus ------------------------------------------------------------------

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.


