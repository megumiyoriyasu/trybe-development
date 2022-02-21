// exercício 01

let a = 5;
let b = 10;

function sum (a, b) {
  return a + b;
}
sum(a, b);

function sub (a, b) {
  return a - b;
}
sub(a, b);

function mult (a, b) {
  return a * b;
}
mult(a, b);

function div (a, b) {
  return a / b;
}
div(a, b);

function mod (a, b) {
  return a % b;
}
mod(a, b);

// exercício 02

const valor1 = 336;
const valor2 = 268;

function maior (valor1, valor2) {
  if (valor1 > valor2) {
    return 'O valor ' + valor1 + ' é maior';
  } else if (valor2 > valor1) {
    return 'O valor ' + valor2 + ' é maior';
  } else {
    return 'Os valores são equivalentes'
  }
}
maior(valor1, valor2);

// exercício 03

const valor3 = 666;

function maiorValor3 (valor1, valor2, valor3) {
  if (valor1 > valor2 && valor1 > valor3 || valor1 === valor2 && valor1 > valor3 || valor1 === valor3 && valor1 > valor2) {
    return 'O valor ' + valor1 + ' é maior';
  } else if (valor2 > valor1 && valor2 > valor3 || valor2 === valor3 && valor2 > valor1) {
    return 'O valor ' + valor2 + ' é maior';
  } else if (valor3 > valor1 && valor3 > valor2) {
    return 'O valor ' + valor3 + ' é maior';
  } else {
    return 'valores equivalentes';
  }
}
maiorValor3(valor1, valor2, valor3);

// exercício 04

const valor = 777;

function positiveNegative (valor) {
  if (valor > 0) {
  return 'positive';
  } else if (valor < 0) {
  return 'negative';
  } else {
  return 'zero';
  }
}
positiveNegative(valor);

// exercícios 05

const angle1 = 45;
const angle2 = 5;
const angle3 = 130;

function triangleCheck (angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3) === 180) {
    return true;
  } else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return 'Erro! Valor inválido!';
  } else {
    return false;
  }
}
triangleCheck(angle1, angle2, angle3);

// exercícios 06

let piece = 'Pawn';
let pieceLowerCase = piece.toLowerCase();

function chessPieces (pieceLowerCase) {
  switch (pieceLowerCase) {
    case 'pawn':
      return 'Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita. O peão é a única peça que não pode recuar!';
      break;
    case 'bishop':
      return 'Um bispo pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga. Ele pode capturar uma peça do oponente movendo-se para a casa que ela ocupa, retirando-a do tabuleiro.';
      break;
    case 'knight':
      return 'O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em "L". O cavalo pode capturar apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular!';
      break;
    case 'rook':
      return 'Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças.';
      break;
    case 'queen':
      return 'Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo).';
      break;
    case 'king':
      return 'O rei não é uma peça muito poderosa, pois só pode se mover (ou capturar) uma casa em qualquer direção. Atenção: o rei não pode ser capturado!';
      break;
    default :
      return 'Peça não identificada';
      break;
  }
}
chessPieces(pieceLowerCase);

// exercício 7

let gradePercentage = 99;

function grade (gradePercentage) {
  if (gradePercentage >= 90) {
    return 'A';
  } else if (gradePercentage < 90 && gradePercentage >= 80) {
    return 'B';
  } else if (gradePercentage < 80 && gradePercentage >= 70) {
    return 'C';
  } else if (gradePercentage < 70 && gradePercentage >= 60) {
    return 'D';
  } else if (gradePercentage < 60 && gradePercentage >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}
grade(gradePercentage);

// exercício 8

const num1 = 345;
const num2 = 37;
const num3 = 2878;

function even (num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
even(num1, num2, num3);

// exercício 9

function odd (num1, num2, num3) {
  if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
odd(num1, num2, num3);

// exercício 10

const custoProduto = 500;
const valorVenda = 1000;

const imposto = (custoProduto * 20 / 100);
const custoTotal = custoProduto + imposto;
const lucro = valorVenda - custoTotal;

function profit (custoProduto, valorVenda, lucro) {
  if (custoProduto < 0 || valorVenda < 0) {
    return 'ERRO!';
  } else {
    return 1000 * lucro;
  }
}
profit(custoProduto, valorVenda, lucro);

// exercício 11

const salario = 3500;

let aliquotaInss = 0;
let inss = 0;

function calculationInss (salario) {
  if (salario <= 1556.94) {
    aliquotaInss = 0.08;
  } else if (salario > 1556.94 && salario <= 2594.92) {
    aliquotaInss = 0.09;
  } else if (salario > 2594.92 && salario <= 5189.82) {
    aliquotaInss = 0.11;
  } else if (salario > 5189.82) {
    aliquotaInss = null;
  }

  if (salario <= 5189.82) {
      inss = (salario * aliquotaInss);
  } else if (salario > 5189.82) {
      inss = 570.88;
  }
  return inss;
}
calculationInss(salario, aliquotaInss);

const salarioBase = (salario - inss);
let aliquotaIr = 0;
let deducaoImposto = 0;

function calculationIr (salarioBase) {
  if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
  } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = 0.075;
  } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIr = 0.15;
  } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = 0.225;
  } else if (salarioBase > 4664.68) {
    aliquotaIr = 0.275;
  }
  return aliquotaIr
}
calculationIr (salarioBase);

function calculationTax (salarioBase) {
  if (salarioBase <= 1903.98) {
    deducaoImposto = 0;
  } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    deducaoImposto = 142.8;
  } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    deducaoImposto = 354.8;
  } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    deducaoImposto = 636.13;
  } else if (salarioBase > 4664.68) {
    deducaoImposto = 869.36;
  }
  return deducaoImposto;
}
calculationTax (salarioBase);

let ir = (salarioBase * aliquotaIr) - deducaoImposto;
let salarioLiquido = 0;

function pay (salarioBase, ir) {
  salarioLiquido = (salarioBase - ir);
  return salarioLiquido;
}
pay(salarioBase, ir);