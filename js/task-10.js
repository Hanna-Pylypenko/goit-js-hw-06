
const refs = {
  numberInput: document.querySelector('input'),
  createBoxesBtn: document.querySelector('button[data-create]'),
  removeBoxesBtn: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
  
};

refs.numberInput.addEventListener('input', onInputResult);

function onInputResult(event) {
  const amount = event.currentTarget.value;
  return amount;
}
refs.createBoxesBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
    for (let i = 1; i <= amount; i += 1) {
      const element = document.createElement('div');
      element.style.backgroundColor = getRandomHexColor();
      refs.boxesContainer.appendChild(element);
      console.log(refs.boxesContainer);
    }
    
}
  

// });

//   
// function createBoxes(amount) {
//     for (let i = 0; i <= amount; i += 1) {
//       const element = document.createElement('div');
//       refs.boxesContainer.appendChild(element);
//     }
//     console.log(refs.boxesContainer);
//   }

//   function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//  };

// refs.createBoxesBtn.addEventListener('click', createBoxes(amount));

