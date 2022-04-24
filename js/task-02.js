const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');
const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredient;
    return liEl;

  });

list.append(...elements);

console.log(list);


// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingredient;
//   list.appendChild(item)
// })


