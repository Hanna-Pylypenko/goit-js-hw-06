const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
}
refs.button.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;}
  const bodyNewColor = getRandomHexColor();
  refs.body.style.backgroundColor = bodyNewColor;
  refs.colorName.textContent = bodyNewColor;
}