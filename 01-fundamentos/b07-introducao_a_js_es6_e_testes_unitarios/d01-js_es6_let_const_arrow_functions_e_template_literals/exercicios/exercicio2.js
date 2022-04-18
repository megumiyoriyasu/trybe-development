const factorial = (numb) => {
  let factorialResult = 1;
  for (let x = numb; x > 1; x -= 1) {
    factorialResult *= x;
  }
  return factorialResult;
}
console.log(factorial(3));
