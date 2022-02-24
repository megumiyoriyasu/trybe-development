// Part 1

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;


const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(title);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerText = 'texto teste';
sectionCenter.appendChild(paragraph);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

const smallImage = document.createElement('img');
smallImage.src = 'https://picsum.photos/200';
sectionLeft.appendChild(smallImage);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const list = document.createElement('ul');
sectionRight.appendChild(list)
const numArray = ['ichi', 'ni', 'san', 'shi', 'go', 'roku', 'shichi', 'hachi', 'kyuu', 'juu'];
for (let x in numArray) {
    const listItem = document.createElement('li');
    listItem.innerHTML = numArray[x];
    list.appendChild(listItem);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let x = 1; x <= 3; x += 1) {
    const titleH3 = document.createElement('h3');
    main.appendChild(titleH3);
}


// Part2

// 1. Adicione a classe title na tag h1 criada;

title.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;

const classH3 = document.getElementsByTagName ('h3');
for (let x in classH3) {
    classH3[x].className = 'description';
}

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

main.removeChild(sectionLeft);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

sectionRight.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

main.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

list.removeChild(list.lastChild);
list.removeChild(list.lastChild);