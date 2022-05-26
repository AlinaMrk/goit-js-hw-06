//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. 
//Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
],
allIngredients=document.querySelector('#ingredients');

  const createListItem=(item)=>{
    const element =document.createElement('li');
    element.textContent=item;
    return element;
  }
  const ingredientsList=ingredients.map((item)=>createListItem(item));
  console.log(ingredientsList);
allIngredients.append(...ingredientsList);
