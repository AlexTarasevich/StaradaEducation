// Создать массив из целых чисел и используя метод forEach, вывести их в консоль с текстовым сообщением Number is ${number}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(`Number is ${number}`);
});


// дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion']. найдите первое слово длиной больше 7 символов и выведите его в консоль
let animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
let result = animals.find((animal) => animal.length > 7);

if (result) {
    console.log(`Первое слово длиннее 7 символов: ${result}`);
} else {
    console.log('Не найдено ни одного слова длиной более 7 символов.');
}


// Дан массив чисел [1, 11, -2, 3, -10, 4]. Создайте новый массив только из отрицательных чисел. Выведите его в консоль

let allNumbers = [1, 11, -2, 3, -10, 4];
let negativeNumbers = allNumbers.filter((number) => number < 0);
console.log(negativeNumbers);

// Дан массив чисел [1, 11, -2, 3, -10, 4]. Создайте новый массив из абсолютных значений элементов и выведите его в консоль.

let superNumbers = [1, 11, -2, 3, -10, 4];
let absoluteValues = superNumbers.map(Math.abs);
console.log(absoluteValues);

// Дан массив чисел [1, 11, -2, 3, -10, 4]. Отсортируйте массив по убыванию и выведите его в консоль.

let sortNumbers = [1, 11, -2, 3, -10, 4];
sortNumbers.sort((a, b) => b - a);

console.log(sortNumbers);