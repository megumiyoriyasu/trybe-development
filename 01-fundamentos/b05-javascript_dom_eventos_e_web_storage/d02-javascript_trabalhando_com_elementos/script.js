// Parte I

// 1. Acesse o elemento elementoOndeVoceEsta

const element = document.querySelector('#elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele

const dad = document.querySelector('#elementoOndeVoceEsta').parentNode;
dad.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const firstSonOfSon = element.firstElementChild;
firstSonOfSon.innerText = "Primeiro filho do filho";

// 4. Acesse o primeiroFilho a partir de pai

const firstSon1 = dad.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta

const firstSon2 = element.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta

const attention = element.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta

const thirdSon1 = element.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai

const thirdSon2 = dad.firstElementChild.nextElementSibling.nextElementSibling;

// Parte II

// 1. Crie um irmão para elementoOndeVoceEsta

const fifthDaughter = document.createElement('section');
dad.appendChild(fifthDaughter);

// 2. Crie um filho para elementoOndeVoceEsta

const thirdSurpriseDaughterOfSon = document.createElement('section');
element.appendChild(thirdSurpriseDaughterOfSon);

// 3. Crie um filho para primeiroFilhoDoFilho

const firstDaughterOfFirstSonOfSon = document.createElement('section');
firstSonOfSon.appendChild(firstDaughterOfFirstSonOfSon);

// 4. A partir desse filho criado, acesse terceiroFilho

const firstDaughterOfFirstSonOfSon2 = firstSonOfSon.firstChild;
firstDaughterOfFirstSonOfSon2.parentElement.parentElement.nextElementSibling;

// Part III

// 1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho (incompleto)

let newElement = document.getElementById('elementoOndeVoceEsta');
let elementChild = newElement.childNodes;

for (let x = 0; x < elementChild.length; x += 1) {
    let currentChild = elementChild[x];
}