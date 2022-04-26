const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const amountValue = document.querySelector('#value');

let counterValue = 0;

function increment() {
    counterValue += 1;
    amountValue.textContent = counterValue;
       
};
function decrement() {
    counterValue -= 1;
    amountValue.textContent = counterValue;
  
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);