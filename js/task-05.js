const inputName = document.querySelector('#name-input');
const helloName = document.querySelector('#name-output');
inputName.addEventListener('input', (e) => {
    if (e.currentTarget.value !== ' ') {
        helloName.textContent = e.currentTarget.value;
    }
} )