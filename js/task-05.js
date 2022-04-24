const inputName = document.querySelector('#name-input');
const helloName = document.querySelector('#name-output');

const inputNameTyping = (event) => {
    if (event.currentTarget.value !== '') {
        helloName.textContent = event.currentTarget.value;
    } else {
        helloName.textContent = 'Anonymous';
    }
} 
inputName.addEventListener('input', inputNameTyping)