// ЗАМЫКАНИЯ
// Замыкание - это функция которая имеет доступ к внешнему окружению

let count = 0;

function logCount() { // функция
	let localCount = 1; // объявим переменную в функции logCount
	console.log(localCount); // локальная переменная
	console.log(count); // внешняя переменная
}

logCount(); // 1 // 0