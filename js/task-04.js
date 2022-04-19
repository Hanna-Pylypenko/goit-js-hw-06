let counter = document.querySelector('#value');
let counterValue = Number(counter.innerText);
const incrementButton = document.querySelector('[data-action="increment"]');

incrementButton.addEventListener("click", () => {
    counter.innerText = counterValue += 1;
    console.log(counter.innerText)
});
const decrementButton = document.querySelector('[data-action="decrement"]');

decrementButton.addEventListener("click", () => {
    counter.innerText = counterValue -= 1;
    console.log(counter.innerText)
});
