const factorial = (numb) => {
  let factorialResult = 1;
  for (let x = numb; x > 1; x -= 1) {
    factorialResult *= x;
  }
  return factorialResult;
}
console.log(factorial(3));

const longestWord = (string) => {
  let stringArray = string.split(' ');
  let bigLength = 0;
  let bigWord = '';
  for (let word of stringArray) {
    if (word.length > bigLength) {
      bigLength = word.length;
      bigWord = word;
    }
  }
  return bigWord
}
console.log(longestWord('Antonio foi ao banheiro e nao sabemos o que aconteceu'));
