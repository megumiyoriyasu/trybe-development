const btnSubmit = document.getElementById('submit');

// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
function disabledSend(event) {
  event.preventDefault();
}
btnSubmit.addEventListener('click', disabledSend);
