//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
//на button.change - color і виводить значення кольору в span.color.

const getRandomHexColor = ()=>{
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body,
             changeColorBtn=document.querySelector('.change-color'),
             colorNote=document.querySelector('.color');

 changeColorBtn.addEventListener('click',(e)=>{
   const color=getRandomHexColor();
   body.style.backgroundColor=color;
   colorNote.textContent=color;

 })