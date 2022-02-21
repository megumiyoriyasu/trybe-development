//exercício 1

function palindromeCheck (string){
  if (string == string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck('arara'));
console.log(palindromeCheck('desenvolvimento'));

// exercício 2

function largNumber(array) {
  let largest = 0;
  for (let x in array) {
    if (array[x] > array[largest]) {
      largest = x;
    } 
  }
  return largest;
}
let arrayLarg = [2, 3, 6, 7, 10, 1];
console.log(largNumber(arrayLarg));

// exercício 3

function smallNumber(array) {
  let smaller = 0;
  for (let x in array) {
    if (array[x] < array[smaller]) {
      smaller = x;
    } 
  }
  return smaller;
}
let arraySmall = [2, 4, 6, 7, 10, 0, -3];
console.log(smallNumber(arraySmall));

// exercício 4

function longString(array) {
  let bigWord = '';
  for (let word in array) {
    if (array[word].length > bigWord.length) {
      bigWord = array[word];
    }
  }
  return bigWord;
}
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(longString(names));

// exercício 5

function modeCheck(array) {
  let number = 0;
  let numReapeat = 0;
  let indexNum = 0;
  for (let x in array) {
    for (let y in array) {
      if (array[x] == array[y]) {
        numReapeat += 1;
      }
    }
    if (numReapeat > number) {
      number = numReapeat;
      indexNum = x;
    }
    numReapeat = 0;
  }
  return array[indexNum];
}
let modeArray = [2, 3, 2, 5, 8, 2, 3];
console.log(modeCheck(modeArray));

// exercício 6

function sumNumbers(number) {
  let sum = 0;
  for (let x = 1; x <= number; x += 1) {
    sum += x;
  }
  return sum;
}
const n = 5;
console.log(sumNumbers(n));

// exercício 7

function endCheck(word, ending) {
  return word.endsWith(ending);
}

const fullWord1 = 'trybe';
const endWord1 = 'be';
console.log(endCheck(fullWord1, endWord1));

const fullWord2 = 'joaofernando';
const endWord2 = 'fernan';
console.log(endCheck(fullWord2, endWord2));