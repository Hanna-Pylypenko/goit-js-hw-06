let counter = document.querySelector('#value');
let counterValue = Number(counter.textContent);
const incrementButton = document.querySelector('button[data-action="increment"]');

incrementButton.addEventListener("click", () => {
    counter.innerText = counterValue += 1;
    console.log(counter.textContent)
});
const decrementButton = document.querySelector('button[data-action="decrement"]');

decrementButton.addEventListener("click", () => {
    counter.textContent = counterValue -= 1;
    console.log(counter.textContent)
});
