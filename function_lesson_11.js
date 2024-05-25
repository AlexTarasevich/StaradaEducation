
function calc(operation, a, b) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'multi') {
        return a * b;
    } else if (operation === 'subtract') {
        return a - b;
    } else {
        return "Неизвестный оператор, напишете 'add', 'multi', или 'subtract'.";
    }
}


console.log(calc('add', 1, 2));       // Вывод: 3
console.log(calc('multi', 1, 2));     // Вывод: 2
console.log(calc('subtract', 3, 2));  // Вывод: 1