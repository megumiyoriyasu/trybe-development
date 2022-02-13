let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers.sort(function(a, b){return (a-b)}));

console.log(numbers.sort(function(a, b){return (b-a)}));

let multiply = [];
for (let i = 0; i < numbers.length; i += 1) {
  for (let x = 1; x <= numbers.length; x += 1) {
    if ([i] < [x]) {
      let m = numbers[i] * numbers[x];
      multiply.push(m);
      break;
    } else if ([x] == numbers.length) {
      let n = numbers[i] * 2;
      multiply.push(n);
      break;
    }
  }
}
console.log(multiply);