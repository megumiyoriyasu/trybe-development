let cars = ['Saab', 'Volvo', 'BMW'];

// Anteriormente para apresentar esses valores:

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// Mas, agora que conhecemos o for , podemos melhorar o código para algo como:

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
}

// Exercício

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let x = 0; x < groceryList.length; x += 1) {
    console.log(groceryList[x]);
}