let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])  
}

let sumNumbers = 0;
for (let x = 0; x < numbers.length; x += 1) {
  sumNumbers = sumNumbers + numbers[x];
}
console.log(sumNumbers);

let mediaAritmetica = sumNumbers / numbers.length;
console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

let max = Math.max(...numbers);
console.log(max);

let impar = 0;
for (let y = 0; y < numbers.length; y += 1) {
  if (numbers[y] % 2 !== 0) {
    impar = impar + 1;
  }
}
if (impar > 0) {
  console.log(impar);
} else {
  console.log('nenhum valor ímpar encontrado');
}

let min = numbers[0];
for (let a = 0; a < numbers.length; a += 1) {
  if (numbers[a] < min) {
    min = numbers[a];
  } 
}
console.log(min);

let newArray = [];
for (let b = 1; b <= 25; b += 1) {
  newArray.push(b);
}
console.log(newArray);

for (let d of newArray) {
  div = (d / 2);
  console.log(div);
}