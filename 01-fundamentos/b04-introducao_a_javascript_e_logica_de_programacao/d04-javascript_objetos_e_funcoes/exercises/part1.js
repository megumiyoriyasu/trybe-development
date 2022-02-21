let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// exercício 1

console.log('Bem-vinda, ' + info['personagem']);

// exercício 2

info['recorrente'] = 'Sim';
console.log(info);

// exercício 3

for (let key in info) {
  console.log(key);
}

// exercício 4

for (let key in info) {
  console.log(info[key]);
}

// exercício 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

let infoCharacters = [];

function printCharacters (info, info2) {
  for (let key in info, info2) {
    if (key === 'recorrente') {
      infoCharacters.push(compareRecurrent(info[key], info2[key]))
    } else {
      infoCharacters.push(info[key] + ' e ' + info2[key]);
    }
  }
  return infoCharacters;
}
function compareRecurrent(char1Recur, char2Recur){
  if ((char1Recur.toLowerCase() == 'sim') && (char2Recur.toLowerCase() == 'sim')) {
    return 'Ambos recorrentes';
  } else {
    return null;
  }
}
printCharacters (info, info2);

console.log(infoCharacters.join('\n'));

// exercício 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"' + '.');

// exercício 7

leitor['livrosFavoritos'].push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor);

// exercício 8

console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');