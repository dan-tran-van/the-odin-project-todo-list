import './style.css';

console.log('Hello world');

const content = document.querySelector("#content");

const redText = document.createElement("div");
redText.classList.add('red-text');
redText.textContent = 'Red text';

content.appendChild(redText);