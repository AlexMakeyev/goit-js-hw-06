const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createIngredientElement = ingredients.map((element) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList = 'item';
  
  return itemEl;
});

document.querySelector('#ingredients').append(...createIngredientElement);
