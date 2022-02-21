// exercício 01

let a = 5;
let b = 10;

let sum = a + b;
console.log(sum);

let sub = a - b;
console.log(sub);

let mult = a * b;
console.log(mult);

let div = a / b;
console.log(div);

let mod = a % b;
console.log(mod);

// exercício 02

const valor1 = 336;
const valor2 = 268;

if (valor1 > valor2) {
    console.log(valor1);
} else if (valor2 > valor1) {
    console.log(valor2);
} else {
    console.log('valores equivalentes');
}

// exercício 03

const valor3 = 666;

if (valor1 > valor2 && valor1 > valor3 || valor1 === valor2 && valor1 > valor3 || valor1 === valor3 && valor1 > valor2) {
    console.log(valor1);
} else if (valor2 > valor1 && valor2 > valor3 || valor2 === valor3 && valor2 > valor1) {
    console.log(valor2);
} else if (valor3 > valor1 && valor3 > valor2) {
    console.log(valor3);
} else {
    console.log('valores equivalentes');
}

// exercício 04

const valor = 777;

if (valor > 0) {
    console.log('positive');
} else if (valor <= 0) {
    console.log('negative');
}

// exercícios 05

const angle1 = 45;
const angle2 = 5;
const angle3 = 130;

if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
} else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log('Erro! Valor inválido!');
} else {
    console.log(false);
}

// exercícios 06

let peca = 'Peão';
let pecaLowerCase = peca.toLowerCase();

switch (pecaLowerCase) {
    case 'peão':
        console.log('Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita. O peão é a única peça que não pode recuar!');
        break;
    case 'bispo':
        console.log('Um bispo pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga. Ele pode capturar uma peça do oponente movendo-se para a casa que ela ocupa, retirando-a do tabuleiro.');
        break;
    case 'cavalo':
        console.log('O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em "L". O cavalo pode capturar apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular!');
        break;
    case 'torre':
        console.log('Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças.');
        break;
    case 'rainha':
        console.log('Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo).');
        break;
    case 'rei':
        console.log('O rei não é uma peça muito poderosa, pois só pode se mover (ou capturar) uma casa em qualquer direção. Atenção: o rei não pode ser capturado!');
        break;
    default :
        console.log('Peça não identificada');
        break;
}

// exercício 7

let gradePercentage = 99;

if (gradePercentage >= 90) {
    console.log('A');
} else if (gradePercentage < 90 && gradePercentage >= 80) {
    console.log('B');
} else if (gradePercentage < 80 && gradePercentage >= 70) {
    console.log('C');
} else if (gradePercentage < 70 && gradePercentage >= 60) {
    console.log('D');
} else if (gradePercentage < 60 && gradePercentage >= 50) {
    console.log('E');
} else {
    console.log('F');
}

// exercício 8

const num1 = 345;
const num2 = 37;
const num3 = 2878;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// exercício 9

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

// exercício 10

const custoProduto = 500;
const valorVenda = 1000;

const imposto = (custoProduto * 20 / 100);
const custoTotal = custoProduto + imposto;
const lucro = valorVenda - custoTotal;

if (custoProduto < 0 || valorVenda < 0) {
    console.log('ERRO!');
} else {
    console.log(1000 * lucro);
}

// exercício 11

const salario = 20000;

let aliquotaInss = 0;
let aliquotaIr = 0;
let deducaoImposto = 0;

if (salario <= 1556.94) {
    aliquotaInss = 0.08;
} else if (salario > 1556.94 && salario <= 2594.92) {
    aliquotaInss = 0.09;
} else if (salario > 2594.92 && salario <= 5189.82) {
    aliquotaInss = 0.11;
} else if (salario > 5189.82) {
    aliquotaInss = null;
}

let inss = 0;

if (salario <= 5189.82) {
    inss = (salario * aliquotaInss);
} else if (salario > 5189.82) {
    inss = 570.88;
}

let salarioBase = (salario - inss);

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
    deducaoImposto = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = 0.075;
    deducaoImposto = 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIr = 0.15;
    deducaoImposto = 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = 0.225;
    deducaoImposto = 636.13;
} else if (salarioBase > 4664.68) {
    aliquotaIr = 0.275;
    deducaoImposto = 869.36;
}

let ir = (salarioBase * aliquotaIr) - deducaoImposto;
let salarioLiquido = (salarioBase - ir);

console.log(salarioLiquido);