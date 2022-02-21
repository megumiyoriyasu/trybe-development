// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const title = document.querySelector("#page-title");
title.innerText = 'Kimi No Na Wa';
title.style.backgroundColor = 'pink'; 
title.style.color = "white";

// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.querySelector("#second-paragraph").innerText = 'Mitsuha Miyamizu (Mone Kamishiraishi) and Taki Tachibana (Ryûnosuke Kamiki)';

// Por fim, recupere o subtítulo e altere-o também.
document.querySelector("#subtitle").innerText = 'Characters:';

// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName
// Altere algum estilo do primeiro deles.
const parag = document.querySelectorAll('.paragraph');
parag[0].innerText = 'film by Makoto Shinkai'
parag[0].style.color = 'red';

// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
document.querySelectorAll('h4')[0].style.color = 'red';