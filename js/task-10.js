//Створи функцію createBoxes(amount), 
//яка приймає один параметр - число.Функція створює стільки < div >, 
//скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//Використовуй готову функцію getRandomHexColor для отримання кольору.
const enteredQuantity=document.querySelector('#controls').firstElementChild,//('#controls input');
      createElenetsBtn = document.querySelector('[data-create]'),
      deleteElenetsBtn = document.querySelector('[data-destroy]'),
      tumbFoeElements=document.querySelector('#boxes');

let elementWidth=30,
    elementHight=30;