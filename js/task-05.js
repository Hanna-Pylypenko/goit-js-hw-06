const inputName = document.querySelector('#name-input');
const helloName = document.querySelector('#name-output');
const inputNameTyping = (e) => {
    if (e.currentTarget.value !== ' ') {
        helloName.textContent = e.currentTarget.value;
    }} 
inputName.addEventListener('input', inputNameTyping)