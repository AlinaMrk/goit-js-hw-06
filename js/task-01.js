//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, 
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
//і кількість елементів в категорії(усіх < li >, вкладених в нього).
//В результаті, в консолі будуть виведені наступні повідомлення.

const listCategories =document.querySelectorAll('.item');
    console.log(`Number of categories: ${listCategories.length}`)
listCategories.forEach((item)=>{
    console.log(`Category: ${item.querySelector('h2').innerHTML}`);
    console.log(`Elements ${item.querySelectorAll('li').length}`);
})