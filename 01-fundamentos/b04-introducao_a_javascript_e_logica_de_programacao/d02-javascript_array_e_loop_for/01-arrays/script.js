let tasksList = ['Beber água', 'Skin Care', 'Brincar com os cachorros'];

// quantidade de elementos contidos

console.log(tasksList.length);

// acessar o array pelo índice

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

// adiciona mais uma tarefa

tasksList.push('Fazer exercícios da Trybe');  
console.log(tasksList);

tasksList.unshift('Checar a agenda');
console.log(tasksList);

// remove a última tarefa

tasksList.pop();  
console.log(tasksList);

// procura o índice de um item no array

let indexOfTask = tasksList.indexOf('Beber água');
console.log(indexOfTask);

// Exercício 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercício 2

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3

menu.push('Contato');
console.log(menu);