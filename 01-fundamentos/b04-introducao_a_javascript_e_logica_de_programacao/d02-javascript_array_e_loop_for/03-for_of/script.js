// O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros...

let numeros = [1,2,3,4,5];

for(let numero of numeros) {
  console.log(numero);
}

let word = 'Hello';

for (let letter of word) {
  console.log(letter);
}

// somar um valor a cada elemento do array (não altera o array)

let arrOfNumbers = [10, 20, 30];

for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

// Exercício

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
  console.log(nome);
}