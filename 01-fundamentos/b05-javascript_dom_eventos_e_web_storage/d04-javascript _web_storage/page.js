const theme = document.querySelector('#theme');
const fontSize = document.querySelector('#font-size');
const fontType = document.querySelector('#font');
const lineHeight = document.querySelector('#line-height');

function setTheme () {
  const changeTheme = document.getElementsByClassName('changeTheme');
  const selectTheme = document.getElementById('theme').value;
  for (let x = 0; x < changeTheme.length; x += 1) {
    if (selectTheme == 'light') {
      changeTheme[x].classList.add('light');
      changeTheme[x].classList.remove('dark');
    } else if (selectTheme == 'dark') {
      changeTheme[x].classList.add('dark');
      changeTheme[x].classList.remove('light');
    }
  }
}
theme.addEventListener('change', setTheme);
