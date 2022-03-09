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

function setFontSize () {
  const changeSize = document.getElementsByClassName('changeSize');
  const selectSize = document.getElementById('font-size').value;
  for (let x = 0; x < changeSize.length; x += 1) {
    if (selectSize == 's') {
      changeSize[x].classList.add('font-s');
      changeSize[x].classList.remove('font-m');
      changeSize[x].classList.remove('font-l');
    } else if (selectSize == 'm') {
      changeSize[x].classList.add('font-m');
      changeSize[x].classList.remove('font-s');
      changeSize[x].classList.remove('font-l');
    } else if (selectSize == 'l') {
      changeSize[x].classList.add('font-l');
      changeSize[x].classList.remove('font-s');
      changeSize[x].classList.remove('font-m');
    }
  }
}
fontSize.addEventListener('change', setFontSize);

function setFontType () {
  const changeFont = document.querySelector('.changeFont');
  const selectFont = document.getElementById('font').value;
  if (selectFont == 'serif') {
    changeFont.classList.add('newspaper');
    changeFont.classList.remove('modern');
  } else if (selectFont == 'sans-serif') {
    changeFont.classList.add('modern');
    changeFont.classList.remove('newspaper');
  }
}
fontType.addEventListener('change', setFontType);
