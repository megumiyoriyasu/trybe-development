// Crie uma função que receba um número e retorne seu fatorial.
//  - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//  - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial = (numb) => {
  let factorialResult = 1;
  for (let x = numb; x > 1; x -= 1) {
    factorialResult *= x;
  }
  return factorialResult;
}
console.log(factorial(3));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

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

// Crie uma página que contenha:
//  - Um botão ao qual será associado um event listener ;
//  - Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//  - Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const score = document.getElementById('count');
let clickCount = 0;
score.innerText = clickCount;

const countScore = () => {
  clickCount = clickCount += 1;
  score.innerText = clickCount;
}

const btn = document.getElementById('btn');
btn.addEventListener('click', countScore);

// Crie um código JavaScript com a seguinte especificação: (Não se esqueça de usar template literals)
//   Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
//   Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.
//   Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
//    - JavaScript;
//    - HTML; ... #goTrybe".

const arraySkills = ['HTML', 'CSS', 'JavaScript', 'Jest', 'GitHub'];

const printSkills = (retFun1) => {
  console.log(`${retFun1}
  Minhas cinco principais habilidades são: ${arraySkills}
  #goTrybe`);
}

const letterSniffer = (string) => {
  let determined = `Tryber x aqui!`;
  const result = determined.replace('x', string);
  printSkills(result);
}
letterSniffer('Megumi');
