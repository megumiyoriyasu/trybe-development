// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // exercício 1

// console.log('Bem-vinda, ' + info['personagem']);

// // exercício 2

// info['recorrente'] = 'Sim';
// console.log(info);

// // exercício 3

// for (let key in info) {
//   console.log(key);
// }

// // exercício 4

// for (let key in info) {
//   console.log(info[key]);
// }

// // exercício 5

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };

// let infoCharacters = [];

// function printCharacters (info, info2) {
//   for (let key in info, info2) {
//     infoCharacters.push(info[key] + ' e ' + info2[key]);
//   }
//   return infoCharacters;
// }
// printCharacters (info, info2);

// if (info[info.length-1] === info2[info2.length-1]) {
//   removed = infoCharacters.splice(infoCharacters.length-1, 1, "Ambos recorrentes");
// }

// console.log(infoCharacters);

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