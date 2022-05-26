//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
//оновлюючи властивість font - size.В результаті, перетягуючи повзунок, 
//буде змінюватися розмір тексту.

const inputRef = document.querySelector("#font-size-control");
const wordRef = document.querySelector("#text");
const onFontChange = () => {
  wordRef.style.fontSize = `${Number(inputRef.value)}px`;
};

inputRef.addEventListener("input", onFontChange);