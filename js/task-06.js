const inputRef = document.querySelector('#validation-input');
const dataLengthRef = inputRef.getAttribute('data-length');

console.log(dataLengthRef);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    inputRef.classList.add('invalid')

    if (event.currentTarget.value.length >= dataLengthRef) {
         inputRef.classList.remove('invalid')
        inputRef.classList.add('valid');
        ;
    } 
}