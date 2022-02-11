// Operador AND

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 22;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!'
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado'
}

console.log(message);

// Operador OR

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = 'sábado';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido UwU');
}

// Operador NOT

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

console.log(!42); // false
console.log(!0); // true

console.log(!null); // true

console.log(!undefined); // true