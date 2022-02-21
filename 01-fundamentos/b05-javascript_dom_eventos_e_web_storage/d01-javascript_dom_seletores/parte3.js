document.querySelector('#container').style.backgroundColor = '#FEFEFC';
document.querySelector('#header-container').style.backgroundColor = '#8ED6C5';
document.querySelector('.emergency-tasks').style.backgroundColor = '#A4E0AC';
document.querySelector('.no-emergency-tasks').style.backgroundColor = '#64A39F';
document.querySelector('#footer-container').style.backgroundColor = '#8ED6C5';

const titleBox = document.querySelectorAll('h3');

for (let x in titleBox) {
    titleBox[x].style.backgroundColor = '#2A4543';
}