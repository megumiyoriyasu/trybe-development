// exercício 1

let multiply = 10;
let fatorial = 1;

for (let index = 1; index <= multiply; index += 1) {
  fatorial = fatorial * [index];
}

console.log(fatorial);

// exercício 2

let word = 'kyuubi';

const split = word.split('');
const reverse = split.reverse();

console.log(reverse);

// exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let record = array[0].length;
let small = '';

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < record) {
    record = array[i].length
    small = array[i];
  }
}

console.log(small);

// exercício 4

const valorMin = 0;
const valorMax = 50;

let primos = [];
let numDivisores = 0;

for (let index = valorMin; index <= valorMax; index += 1) {
  numDivisores = 0;
  for (let i = 2; i < index; i += 1) {
    if (index % i === 0) {
      numDivisores += 1;
    }
  }
  if (numDivisores === 0 && index > 1) {
  primos.push(index);
  }
}

let maxPrime = Math.max(...primos)
console.log(maxPrime);