const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text');
console.log(inputRef.value);
inputRef.addEventListener('input', fontChange)
function fontChange(event) {
    spanRef.style.fontSize = event.currentTarget.value + "px";
}