
function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return "Неизвестный оператор, напишете 'add', 'multi', или 'subtract'.";
    }
}


console.log(calc('add', 1, 2));       // Вывод: 3
console.log(calc('multi', 1, 2));     // Вывод: 2
console.log(calc('subtract', 3, 2));  // Вывод: 1