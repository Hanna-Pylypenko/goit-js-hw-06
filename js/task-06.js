const inputRef = document.querySelector('#validation-input');
const dataLengthRef = inputRef.getAttribute('data-length');

//console.log(dataLengthRef);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length >= dataLengthRef) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
    
}