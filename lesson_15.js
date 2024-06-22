// Навигация и поиск элементов Dom 

// Доступ к DOM осуществляется через document
//  HTML теги <body> и <head> доступны как DOM-узлы document.body и document.head


// DOM коллекции
// У элементов DOM, таких как body,  есть дети (все вложенные элементы) 
// Коллекция childNodes содержит список всех детей, включая текстовые узлы. childNodes похож на массив, но на самом деле это коллекция – особый перебираемый объект. Методы массивов не работают для коллекций.
// Для перебора можно использовать for..of

for (const node of document.body.childNodes) {
    console.log(node); // все узлы из коллекции
  }



// DOM Селекторы
// Кроме коллекций, есть и прямые обращения к дочерним элементам, например, к самому первому firstElementChild или последнему lastElementChild 

//<!DOCTYPE html>
<html>
<head>
	  <title>firstChild и lastChild</title>
</head>
<body>
    <p>Первый абзац</p>
    <p>Второй абзац</p>
    <p>Третий абзац</p>
</body>
</html>

// Получаем доступ к body
const body = document.body;

// Получаем первый дочерний элемент - firstElementChild
const firstChildElement = body.firstElementChild;

// Получаем последний дочерний элемент - lastElementChild
const lastChildElement = body.lastElementChild;

// Можно получить текст элемента из свойства textContent
console.log(firstChildElement.textContent); // Первый абзац
console.log(lastChildElement.textContent); // Третий абзац

// Получить по id
// Намного точнее можно обратиться к элементу по его id - это значение должно быть уникальным на всей странице (для всего html документа)

//<!DOCTYPE html>
<html>
<head>
    <title>getElementById</title>
</head>
<body>
    <p>Первый абзац</p>
    <p id="mainParagraph">Второй абзац</p> 
    <p>Третий абзац</p>
</body>
</html>

const mainParagraphElement = document.getElementById('mainParagraph');
console.log(mainParagraphElement.textContent); // Второй абзац
