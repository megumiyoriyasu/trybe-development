
// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const oldText = document.getElementsByTagName("p")[0];

function textReplace(text) {
    oldText.innerText = text;
}

const newText = 'Daqui a 2 anos, gostaria de já estar encaminhada na carreira de DEV e me consolidando em alguma empresa responsável e agradável de se trabalhar';
textReplace(newText);

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

const oldBack = document.getElementsByClassName("main-content")[0];

function backColor(color) {
    oldBack.style.backgroundColor = color;
}

const colorTrybe = 'rgb(76,164,109)';
backColor(colorTrybe);

// Crie uma função que mude a cor do quadrado vermelho para branco.

const oldCenter = document.getElementsByClassName("center-content")[0];

function centerColor(color) {
    oldCenter.style.backgroundColor = color;
}

const centerBack = 'white';
centerColor(centerBack);

// Crie uma função que corrija o texto da tag <h1>.

const oldTitle = document.getElementsByTagName('h1')[0];

function titleReplace(title) {
    oldTitle.innerText = title;
}

const newTitle = 'Exercício 5.1 - JavaScript';
titleReplace(newTitle);

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragraphUpperCase(paragraph) {
    for (let x in paragraph){
        return paragraph[x].innerText = paragraph[x].innerText.toUpperCase();
    }
}

const paragraphLow = document.getElementsByTagName('p');
paragraphUpperCase(paragraphLow);

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function printAllP(paragraph) {
    for (let index in paragraph) {
        console.log(paragraph[index].innerText);
    }    
}
const allParagraph = document.getElementsByTagName('p');
printAllP(allParagraph);